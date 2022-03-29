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
  background?: {
    color?: string
    opacity?: number
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
