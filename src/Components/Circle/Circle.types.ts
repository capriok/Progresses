import { OptionColors } from 'Components/index.types'

export interface CircleProps {
  percent: number
  className?: string
  options?: CircleOptions
}

export type CircleOptions = {
  size?: number
  strokeWidth?: number
  showPercent?: boolean
  colors?: OptionColors
}
