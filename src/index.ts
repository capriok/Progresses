export interface ProgressBarProps {
  percent: number
  options?: ProgressBarOptions
}

export type ProgressBarOptions = {
  width: number
  height: number
  orientation?: OrientationTypes
  fill?: {
    color?: string
    opacity?: number
  }
  animation?: {
    type?: AnimationTypes
    color?: string
  }
}

type AnimationTypes = 'slow' | 'fast'
type OrientationTypes = 'horizontal' | 'vertical'

declare const ProgressBar: React.FC<ProgressBarProps>
export default ProgressBar
