export interface CircleProps {
  percent: number
  className?: string
  options?: CircleOptions
}

export type CircleOptions = {
  size: number
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
