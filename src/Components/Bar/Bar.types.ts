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
  colors?: {
    back?: string
    fill?: string
    animation?: string
  }
}
