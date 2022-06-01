import React from 'react'

import PropTypes from 'prop-types'

import './feature-card1.css'

const FeatureCard1 = (props) => {
  return (
    <div className={`feature-card1-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card1-text">{props.title}</h2>
    </div>
  )
}

FeatureCard1.defaultProps = {
  rootClassName: '',
  title:
    '•\tDelta Dunarii este unica delta din lume, declarata rezervatie a biosferei',
}

FeatureCard1.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard1
