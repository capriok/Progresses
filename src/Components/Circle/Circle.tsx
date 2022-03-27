import React, { useEffect, useMemo, useRef, useState } from 'react'
import { CircleProps } from './Circle.types'
import '../../styles/circle.scss'

const defaultOptions = {
  size: 100,
  stroke: {
    color: '#202020',
    width: 7,
  },
  fill: {
    color: 'transparent',
    opacity: 1,
  },
  animation: {
    color: 'darkred',
    type: 'slow',
  },
}

const Circle: React.FC<CircleProps> = (props) => {
  const { percent } = props

  const [pct, setPct] = useState(0)

  const options = useMemo(() => {
    const options = {
      ...defaultOptions,
      ...props.options,
      stroke: {
        ...defaultOptions.stroke,
        ...props.options?.stroke,
      },
      fill: {
        ...defaultOptions.fill,
        ...props.options?.fill,
      },
      animation: {
        ...defaultOptions.animation,
        ...props.options?.animation,
      },
    }

    return options
  }, [props.options])

  const styles = useMemo(() => {
    const styles = {
      svg: {
        height: options.size,
        width: options.size,
      },
      circle: {
        r: options.size / 2 - options.stroke.width,
        cx: options.size / 2,
        cy: options.size / 2,
        strokeDasharray: options.size * 2.7,
        strokeDashoffset: '0',
        fill: options.fill.color,
        stroke: options.stroke.color,
        strokeWidth: options.stroke.width,
        animation: renderAnimation(percent),
      },
    }

    return styles
  }, [])

  useEffect(() => {
    calculateCircleProgress(styles.circle.r, percent)
  }, [styles, percent])

  function calculateCircleProgress(r: number, p: number) {
    var c = Math.PI * (r * 2)
    var pct = ((100 - p) / 100) * c
    setPct(pct)
  }

  function renderAnimation(percent: number) {
    if (percent !== 100) return 'unset'

    if (options.animation.type === 'slow') {
      return `ease-in-out 3s infinite alternate slow`
    }
    if (options.animation.type === 'fast') {
      return `ease-in-out 1.5s infinite alternate fast`
    }

    return 'unset'
  }

  const ref: any = useRef()

  useEffect(() => {
    ref.current.style.setProperty('--circle-stroke-color', options.stroke.color)
    ref.current.style.setProperty('--circle-fill-color', options.fill.color)
    ref.current.style.setProperty(
      '--circle-animation-color',
      options.animation.color,
    )
  }, [])

  return (
    <div ref={ref} className="_ProgressCircle">
      <svg style={styles.svg}>
        <circle
          {...styles}
          style={{ ...styles.circle, strokeDashoffset: pct }}
        />
      </svg>
    </div>
  )
}

export default Circle
