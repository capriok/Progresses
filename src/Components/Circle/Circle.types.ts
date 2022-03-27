export interface CircleProps {
  percent: number
  options?: CircleOptions
}

export type CircleOptions = {
  size: number
  stroke?: {
    color?: string
  }
  fill?: {
    color?: string
    opacity?: number
  }
  animation?: {
    type?: 'slow' | 'fast'
    color?: string
  }
}
