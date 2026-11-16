/**
 * Controleert dat de vaste tabellen (lib/feeding-table.ts) precies hetzelfde
 * uitkomen als de calculator (lib/feeding-calc.ts).
 *
 *   npx tsx scripts/check-feeding-table.ts
 */
import { feedingRow, weightSteps } from '../lib/feeding-table'
import { computeFeeding } from '../lib/feeding-calc'
import type { AgeCategory } from '../hooks/useCalculator'

const LEEFTIJDEN: [AgeCategory, number][] = [
  ['0-1', 0],
  ['1' as AgeCategory, 1],
  ['3' as AgeCategory, 3],
  ['6' as AgeCategory, 6]
]

let checks = 0
const fouten: string[] = []

for (const [cat, maanden] of LEEFTIJDEN) {
  for (const w of weightSteps(2, 12, 0.1)) {
    for (let n = 4; n <= 10; n++) {
      const tabel = feedingRow(w, n, maanden)
      const calc = computeFeeding({
        weight: String(w),
        ageMonths: cat,
        feedingsPerDay: String(n),
        isPremature: false,
        gestationalAge: '',
        birthDate: '',
        breastFeedings: '0'
      })
      checks++
      if (!calc) {
        fouten.push(`${w} kg, ${n}x, ${cat}: calculator gaf null`)
        continue
      }
      if (calc.dailyAmount !== tabel.daily || calc.recommendedAmount !== tabel.perFeed) {
        fouten.push(
          `${w} kg, ${n}x, ${cat}: tabel ${tabel.daily}/${tabel.perFeed}, calculator ${calc.dailyAmount}/${calc.recommendedAmount}`
        )
      }
    }
  }
}

if (fouten.length) {
  console.error(`✗ ${fouten.length} van ${checks} combinaties wijken af:`)
  fouten.slice(0, 20).forEach((f) => console.error('  ' + f))
  process.exit(1)
}
console.log(`✓ Tabel en calculator gelijk (${checks} combinaties)`)
