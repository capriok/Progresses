import React, { useEffect, useMemo, useRef } from 'react'
import { ProgressesProps } from 'Components/index.types'
import '../../styles/bar.scss'

const defaultOptions = {
  width: 100,
  height: 10,
  orientation: 'horizontal',
  showPercent: true,
  colors: {
    back: '#e0e0e0',
    fill: '#202020',
    anim: 'darkred',
  },
}

const Bar: React.FC<ProgressesProps> = (props) => {
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
    console.log(styles)

    return styles
  }, [options])

  const ref: any = useRef()

  function renderAnimation(percent: number) {
    if (percent !== 100) return `ease-in-out 3s infinite alternate baridle`
    if (percent === 100) return `ease-in-out 3s infinite alternate barslow`

    return 'unset'
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
