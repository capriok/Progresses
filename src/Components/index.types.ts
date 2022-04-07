import { BarOptions } from './Bar/Bar.types'
import { CircleOptions } from './Circle/Circle.types'

export interface ProgressesProps {
  percent: number
  className?: string
  options?: BarOptions | CircleOptions
}

export interface OptionColors {
  back?: string
  fill?: string
  anim?: string
}
