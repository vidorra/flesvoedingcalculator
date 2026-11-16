/**
 * Statistiek voor de A/B-test in de admin. Pure functies, geen afhankelijkheden.
 *
 * - Wilson-interval (90%) voor het deel berekeningen met een klik.
 * - Kans dat B beter is dan A: exacte formule voor twee Beta-verdelingen met
 *   een vlakke startverdeling (Beta(1,1)), zie Evan Miller, "Formulas for
 *   Bayesian A/B Testing".
 * - Controle op de loting: chi-kwadraattoets van de aantallen per variant
 *   tegen de ingestelde verdeling.
 */

// Lanczos-benadering van ln Γ(x)
function logGamma(x: number): number {
  const g = 7
  const c = [
    0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313,
    -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6,
    1.5056327351493116e-7
  ]
  if (x < 0.5) return Math.log(Math.PI / Math.sin(Math.PI * x)) - logGamma(1 - x)
  x -= 1
  let a = c[0]
  const t = x + g + 0.5
  for (let i = 1; i < g + 2; i++) a += c[i] / (x + i)
  return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a)
}

function logBeta(a: number, b: number): number {
  return logGamma(a) + logGamma(b) - logGamma(a + b)
}

/** P(pB > pA) bij xA kliks op nA berekeningen en xB op nB. */
export function probBBeatsA(xA: number, nA: number, xB: number, nB: number): number {
  const aA = 1 + xA
  const bA = 1 + nA - xA
  const aB = 1 + xB
  const bB = 1 + nB - xB
  let total = 0
  for (let i = 0; i < aB; i++) {
    total += Math.exp(
      logBeta(aA + i, bA + bB) - Math.log(bB + i) - logBeta(1 + i, bB) - logBeta(aA, bA)
    )
  }
  return Math.min(1, Math.max(0, total))
}

/** Wilson-scoreinterval; z = 1.645 geeft 90%. */
export function wilsonInterval(x: number, n: number, z = 1.645): [number, number] {
  if (n <= 0) return [0, 0]
  const p = x / n
  const z2 = z * z
  const denom = 1 + z2 / n
  const centre = (p + z2 / (2 * n)) / denom
  const half = (z * Math.sqrt((p * (1 - p)) / n + z2 / (4 * n * n))) / denom
  return [Math.max(0, centre - half), Math.min(1, centre + half)]
}

// Complementaire foutfunctie (Abramowitz & Stegun 7.1.26)
function erfc(x: number): number {
  const t = 1 / (1 + 0.3275911 * Math.abs(x))
  const y =
    t * (0.254829592 + t * (-0.284496736 + t * (1.421413741 + t * (-1.453152027 + t * 1.061405429))))
  const r = y * Math.exp(-x * x)
  return x >= 0 ? r : 2 - r
}

/**
 * p-waarde van de loting: wijkt de verdeling van berekeningen af van de
 * ingestelde gewichten? Twee varianten, dus 1 vrijheidsgraad.
 */
export function assignmentPValue(counts: number[], weights: number[]): number {
  const n = counts.reduce((s, c) => s + c, 0)
  const wSum = weights.reduce((s, w) => s + w, 0)
  if (n === 0 || wSum === 0) return 1
  let chi2 = 0
  counts.forEach((c, i) => {
    const expected = (n * weights[i]) / wSum
    if (expected > 0) chi2 += ((c - expected) ** 2) / expected
  })
  return erfc(Math.sqrt(chi2 / 2))
}
