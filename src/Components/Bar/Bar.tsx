import React, { useEffect, useMemo, useRef } from 'react'
import { BarProps } from './Bar.types'
import '../../styles/bar.scss'

const defaultOptions = {
  width: 150,
  height: 100,
  orientation: 'horizontal',
  background: {
    color: '#e0e0e0',
    opacity: 1,
  },
  fill: {
    color: '#202020',
    opacity: 1,
  },
  animation: {
    color: 'darkred',
    type: 'slow',
  },
}

const Bar: React.FC<BarProps> = (props) => {
  const { percent } = props

  const options = useMemo(() => {
    const options = {
      ...defaultOptions,
      ...props.options,
      background: {
        ...defaultOptions.background,
        ...props.options?.background,
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
      progress: {
        transform: 'rotate(0deg)',
      },
      svg: {
        width: options.width,
        height: options.height,
        backgroundColor: options.background.color,
      },
      rect: {
        width: percent + '%',
        height: '100%',
        fill: options.fill.color,
        opacity: options.fill.opacity,
        animation: renderAnimation(percent),
      },
    }

    if (options.orientation === 'vertical') {
      styles.progress.transform = 'rotate(180deg)'
      styles.svg.width = options.height
      styles.svg.height = options.width
      styles.rect.width = '100%'
      styles.rect.height = percent + '%'
    }

    return styles
  }, [options])

  const ref: any = useRef()

  useEffect(() => {
    ref.current.style.setProperty('--bar-fill-color', options.fill.color)
    ref.current.style.setProperty('--bar-anim-color', options.animation.color)
  }, [])

  function renderAnimation(percent: number) {
    if (percent !== 100) return 'unset'

    if (options.animation.type === 'slow') {
      return `ease-in-out 3s infinite alternate barslow`
    }
    if (options.animation.type === 'fast') {
      return `ease-in-out 1.5s infinite alternate barfast`
    }

    return 'unset'
  }

  return (
    <div ref={ref} className="_ProgressBar" style={styles.progress}>
      <svg style={styles.svg}>
        <rect style={styles.rect} />
      </svg>
    </div>
  )
}

export default Bar
