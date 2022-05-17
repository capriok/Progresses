export interface OptionColors {
  back?: string
  fill?: string
  anim?: string
}

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

export { default as ProgressBar } from './Bar'

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

export { default as ProgressCircle } from './Circle'
