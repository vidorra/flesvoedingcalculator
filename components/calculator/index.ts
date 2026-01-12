// Calculator components barrel export
export { default as PrematureInputSection } from './PrematureInputSection'
export { default as CalculatorResults } from './CalculatorResults'
export { default as FeedingSchedule } from './FeedingSchedule'
export { default as FAQSection, faqData } from './FAQSection'
export { default as FeedingTypesInfo } from './FeedingTypesInfo'

// Re-export types from useCalculator
export type {
  CalculatorResults as CalculatorResultsType,
  CorrectedAgeData,
  FeedingScheduleItem,
  AgeCategory
} from '../../hooks/useCalculator'
