import { OptionColors } from 'Components/index.types'

export interface BarProps {
  percent: number
  className?: string
  options?: BarOptions
}

export type BarOptions = {
  width?: number
  height?: number
  orientation?: 'horizontal' | 'vertical'
  showPercent?: boolean
  colors?: OptionColors
}
