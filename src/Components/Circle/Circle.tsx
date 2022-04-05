import React, { useEffect, useMemo, useRef } from 'react'
import { CircleProps } from './Circle.types'
import '../../styles/circle.scss'

const defaultOptions = {
  size: 100,
  strokeWidth: 7,
  showPercent: true,
  colors: {
    back: '#e0e0e0',
    fill: '#202020',
    animation: 'darkred',
  },
}

const Circle: React.FC<CircleProps> = (props) => {
  const { percent, className } = props

  const options = useMemo(() => {
    const options = {
      ...defaultOptions,
      ...props.options,
      colors: {
        ...defaultOptions.colors,
        ...props.options?.colors,
      },
    }

    return options
  }, [props.options])

  const styles = useMemo(() => {
    let radius = options.size / 2 - options.strokeWidth
    let diameter = radius * 2
    let circumference = Math.round(Math.PI * diameter)
    let percentageRemaining = 100 - percent
    let percentage = (percentageRemaining / 100) * circumference

    const styles = {
      svg: {
        height: options.size,
        width: options.size,
      },
      back: {
        r: options.size / 2 - options.strokeWidth,
        cx: options.size / 2,
        cy: options.size / 2,
        stroke: options.colors.back,
        strokeWidth: options.strokeWidth - 1,
      },
      fill: {
        r: options.size / 2 - options.strokeWidth,
        cx: options.size / 2,
        cy: options.size / 2,
        strokeDasharray: circumference,
        strokeDashoffset: percentage,
        stroke: options.colors.fill,
        strokeWidth: options.strokeWidth,
        animation: renderAnimation(percent),
      },
    }

    return styles
  }, [options])

  function renderAnimation(percent: number) {
    if (percent !== 100) return `ease-in-out 3s infinite alternate circleidle`
    if (percent === 100) return `ease-in-out 3s infinite alternate circleslow`

    return 'unset'
  }

  const ref: any = useRef()

  useEffect(() => {
    ref.current.style.setProperty('--circle-fill-color', options.colors.fill)
    ref.current.style.setProperty('--circle-anim-color', options.colors.animation)
  }, [])

  return (
    <div
      ref={ref}
      className={'_ProgressCircle' + `${' ' + className}`}>
      <svg style={styles.svg}>
        <circle
          id="_CircleBack"
          style={{ ...styles.back }}
        />
        <circle
          id="_CircleFill"
          style={{ ...styles.fill }}
        />
      </svg>
      {options.showPercent ? <div className="_ShowPercent">{percent}</div> : <></>}
    </div>
  )
}

export default Circle
