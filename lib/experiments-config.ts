/**
 * Welke experimenten bestaan en welke varianten ze hebben. Een variant is een
 * stuk React in de code; de admin start, pauzeert, verdeelt en stopt alleen.
 * De eerste variant is altijd A (de huidige opzet), de tweede B.
 *
 * Dit bestand is puur (geen React), zodat zowel de API-routes als de browser
 * het kunnen importeren.
 */

export type ExperimentStatus = 'draft' | 'running' | 'paused' | 'finished'

export interface ExperimentArm {
  id: string
  label: string
}

export interface ExperimentDefinition {
  key: string
  website: string
  title: string
  description: string
  arms: [ExperimentArm, ExperimentArm]
}

export const EXPERIMENTS: ExperimentDefinition[] = [
  {
    key: 'calc_result_block',
    website: 'flesvoedingcalculator',
    title: 'Productblok bij de uitkomst',
    description:
      'Homepage. A: vaste producten onderaan (zoals het was). B: drie producten per leeftijd direct bij de uitkomst, vaste producten vervallen.',
    arms: [
      { id: 'control', label: 'A  huidig' },
      { id: 'result_block', label: 'B  uitkomstblok' }
    ]
  }
]

export function getExperimentDefinition(key: string): ExperimentDefinition | undefined {
  return EXPERIMENTS.find((e) => e.key === key)
}

// Beslisregel, vooraf vastgelegd (zie productblok-ab-test-plan.md)
export const DECISION_RULE = {
  minDays: 28,
  minCalculationsPerArm: 430,
  maxDays: 84,
  winThreshold: 0.95,
  loseThreshold: 0.05
}

// Toegestane vorm van sleutels/varianten/pv in meetroutes
export const EXP_TOKEN = /^[A-Za-z0-9_-]{1,40}$/
