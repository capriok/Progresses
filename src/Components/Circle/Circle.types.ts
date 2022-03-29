export interface CircleProps {
  className?: string
  percent: number
  options?: CircleOptions
}

export type CircleOptions = {
  size: number
  showPercent?: boolean
  fill?: {
    color?: string
    opacity?: number
  }
  stroke?: {
    color?: string
    width?: number
    opacity?: number
  }
  animation?: {
    type?: 'slow' | 'fast'
    color?: string
  }
}
