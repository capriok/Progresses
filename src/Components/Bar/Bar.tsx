import React, { useEffect, useMemo, useRef } from 'react'
import { BarProps } from './Bar.types'
import '../../styles/bar.scss'

const defaultOptions = {
  width: 100,
  height: 10,
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
  const { percent, className } = props

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
      showPercent: {
        transform: 'translate(-50%, -50%) rotate(0deg)',
      },
    }

    if (options.orientation === 'vertical') {
      styles.progress.transform = 'rotate(180deg)'
      styles.rect.width = '100%'
      styles.rect.height = percent + '%'
      styles.showPercent.transform = 'translate(-50%, -50%) rotate(180deg)'
    }
    console.log(styles)

    return styles
  }, [options])

  const ref: any = useRef()

  function renderAnimation(percent: number) {
    if (percent !== 100) return `ease-in-out 3s infinite alternate baridle`

    if (options.animation.type === 'slow') {
      return `ease-in-out 3s infinite alternate barslow`
    }
    if (options.animation.type === 'fast') {
      return `ease-in-out 1.5s infinite alternate barfast`
    }

    return 'unset'
  }

  useEffect(() => {
    ref.current.style.setProperty('--bar-fill-color', options.fill.color)
    ref.current.style.setProperty('--bar-anim-color', options.animation.color)
  }, [])

  return (
    <div
      ref={ref}
      className={'_ProgressBar' + `${' ' + className}`}
      style={styles.progress}>
      <svg style={styles.svg}>
        <rect style={styles.rect} />
      </svg>
    </div>
  )
}

export default Bar
