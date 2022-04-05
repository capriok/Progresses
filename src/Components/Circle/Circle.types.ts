export interface CircleProps {
  className?: string
  percent: number
  options?: CircleOptions
}

export type CircleOptions = {
  size: number
  strokeWidth?: number
  showPercent?: boolean
  colors?: {
    back?: string
    fill?: string
    animation?: string
  }
}
