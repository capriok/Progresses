import React, { useEffect, useMemo, useRef } from 'react'
import { CircleProps } from './Circle.types'
import '../../styles/circle.scss'

const defaultOptions = {
  size: 100,
  fill: {
    color: '#e0e0e0',
    opacity: 1,
  },
  stroke: {
    color: '#202020',
    width: 7,
    opacity: 1,
  },
  animation: {
    color: 'darkred',
    type: 'slow',
  },
}

const Circle: React.FC<CircleProps> = (props) => {
  const { percent } = props

  const options = useMemo(() => {
    const options = {
      ...defaultOptions,
      ...props.options,
      fill: {
        ...defaultOptions.fill,
        ...props.options?.fill,
      },
      stroke: {
        ...defaultOptions.stroke,
        ...props.options?.stroke,
      },
      animation: {
        ...defaultOptions.animation,
        ...props.options?.animation,
      },
    }

    return options
  }, [props.options])

  const styles = useMemo(() => {
    var radius = options.size / 2 - options.stroke.width
    var diameter = radius * 2
    var circumference = Math.round(Math.PI * diameter)
    var percentageRemaining = 100 - percent
    var percentage = (percentageRemaining / 100) * circumference

    const styles = {
      svg: {
        height: options.size,
        width: options.size,
      },
      circles: {
        fill: {
          r: options.size / 2 - options.stroke.width,
          cx: options.size / 2,
          cy: options.size / 2,
          stroke: options.fill.color,

          strokeWidth: options.stroke.width - 1,
          opacity: options.fill.opacity,
        },
        stroke: {
          r: options.size / 2 - options.stroke.width,
          cx: options.size / 2,
          cy: options.size / 2,
          strokeDasharray: circumference,
          strokeDashoffset: percentage,
          stroke: options.stroke.color,
          strokeWidth: options.stroke.width,
          opacity: options.stroke.opacity,
          animation: renderAnimation(percent),
        },
      },
    }

    return styles
  }, [options])

  function renderAnimation(percent: number) {
    if (percent !== 100) return 'unset'

    if (options.animation.type === 'slow') {
      return `ease-in-out 3s infinite alternate circleslow`
    }
    if (options.animation.type === 'fast') {
      return `ease-in-out 1.5s infinite alternate circlefast`
    }

    return 'unset'
  }

  const ref: any = useRef()

  useEffect(() => {
    ref.current.style.setProperty('--circle-fill-color', options.fill.color)
    ref.current.style.setProperty('--circle-stroke-color', options.stroke.color)
    ref.current.style.setProperty('--circle-anim-color', options.animation.color)
  }, [])

  return (
    <div ref={ref} className="_ProgressCircle">
      <svg style={styles.svg}>
        <circle id="_CircleFill" {...styles} style={{ ...styles.circles.fill }} />
        <circle id="_CircleStroke" {...styles} style={{ ...styles.circles.stroke }} />
      </svg>
    </div>
  )
}

export default Circle
