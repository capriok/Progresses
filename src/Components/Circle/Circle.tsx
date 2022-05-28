import React, { useEffect, useMemo, useRef } from 'react'
import { CircleProps } from 'Components'
import '../../styles/circle.scss'

const defaultOptions = {
  size: 100,
  strokeWidth: 7,
  showPercent: true,
  colors: {
    back: 'rgba(200, 200, 200, 0.8)',
    fill: 'rgba(20, 20, 20, 0.8)',
    anim: 'rgba(200, 10, 10, 0.8)',
  },
}

const Circle: React.FC<CircleProps> = (props) => {
  const { percent, className } = props

  const ref: any = useRef()

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
    const full = percent === 100
    return `ease-in-out 3s infinite alternate circle${full ? 'anim' : 'idle'}`
  }

  useEffect(() => {
    ref.current.style.setProperty('--circle-fill-color', options.colors.fill)
    ref.current.style.setProperty('--circle-anim-color', options.colors.anim)
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
