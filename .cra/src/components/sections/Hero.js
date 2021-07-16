import React, { useState } from 'react'
import classNames from 'classnames'
import { SectionProps } from '../../utils/SectionProps'

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  )

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  )

  const [name, setName] = useState('')
  const [sub, setSub] = useState('Subscribe for updates')

  const handleSubmit = evt => {
    evt.preventDefault()
    if (!name) return
    console.log(`Submitting Name ${name}`)
    fetch('https://inspyr.sambarrowclough.repl.co', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: name,
        user: 'b38879b4-a591-465b-bf34-1577d0c6449e'
      })
    }).then(r => {
      console.log(r)
      setSub('Thank you!')
    })
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              style={{ color: '#00182A' }}
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Carefully selected pricing pages
            </h1>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="300"
          >
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  className="email"
                  placeholder="Email address"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </label>
              <input type="submit" className="btn-sub" value={sub} />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = propTypes
Hero.defaultProps = defaultProps

export default Hero
