import React, { useEffect, useMemo, useState } from 'react'
import { CircleOptions, CircleProps } from './Circle.types'
import '../../styles/circle.scss'

const defaultOptions: CircleOptions = {
  size: 150,
  fill: {
    color: '#202020',
    stroke: '#7f7f7f',
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
        height: options.size,
        width: options.size,
        r: 60,
        cx: options.size / 2,
        cy: options.size / 2,
        strokeDasharray: '189',
        strokeDashoffset: pct,
        fill: options.fill.color,
        stroke: options.fill.stroke,
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

    if (options.animation!.type === 'slow') {
      return `ease-in-out 3s infinite alternate slow`
    }
    if (options.animation!.type === 'fast') {
      return `ease-in-out 1.5s infinite alternate fast`
    }

    return 'unset'
  }

  return (
    <div className="_ProgressCircle">
      <svg style={styles.svg}>
        <circle {...styles} style={styles.circle} />
      </svg>
    </div>
  )
}

export default Circle
