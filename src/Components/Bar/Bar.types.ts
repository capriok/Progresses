import { OptionColors } from 'Components/index.types'

export type BarOptions = {
  width?: number
  height?: number
  orientation?: 'horizontal' | 'vertical'
  showPercent?: boolean
  colors?: OptionColors
}
