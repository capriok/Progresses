export interface CircleProps {
  percent: number
  options?: CircleOptions
}

export type CircleOptions = {
  size: number
  fill?: {
    color?: string
    stroke?: string
    opacity?: number
  }
  animation?: {
    type?: 'slow' | 'fast'
    color?: string
  }
}
