import React, { useEffect, useMemo, useRef } from 'react'
import { BarProps } from 'Components'
import '../../styles/bar.scss'

const defaultOptions = {
  width: 100,
  height: 10,
  orientation: 'horizontal',
  showPercent: true,
  colors: {
    back: 'rgba(0, 0, 0, 0.8)',
    fill: 'rgba(200, 200, 200, 0.8)',
    anim: 'rgba(200, 30, 30, 0.8)',
  },
}

const Bar: React.FC<BarProps> = (props) => {
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
    const styles = {
      progress: {
        transform: 'rotate(0deg)',
      },
      svg: {
        width: options.width,
        height: options.height,
        backgroundColor: options.colors.back,
      },
      rect: {
        width: percent + '%',
        height: '100%',
        fill: options.colors.fill,
        animation: renderAnimation(percent),
      },
      showPercent: {
        top: '100%',
        transform: 'translate(-50%, -50%)',
      },
    }

    if (options.orientation === 'vertical') {
      styles.progress.transform = 'rotate(180deg)'
      styles.rect.width = '100%'
      styles.rect.height = percent + '%'
      styles.showPercent.top = '0%'
      styles.showPercent.transform = 'translate(-50%, -50%) rotate(180deg)'
    }

    return styles
  }, [options])

  function renderAnimation(percent: number) {
    const full = percent === 100
    return `ease-in-out 3s infinite alternate bar${full ? 'anim' : 'idle'}`
  }

  useEffect(() => {
    ref.current.style.setProperty('--bar-fill-color', options.colors.fill)
    ref.current.style.setProperty('--bar-anim-color', options.colors.anim)
  }, [])

  return (
    <div
      ref={ref}
      className={'_ProgressBar' + `${' ' + className}`}
      style={styles.progress}>
      <svg style={styles.svg}>
        <rect style={styles.rect} />
      </svg>
      {options.showPercent ? (
        <div
          className="_ShowPercent"
          style={styles.showPercent}>
          {percent}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Bar
