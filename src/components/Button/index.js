import React from 'react'
import PropTypes from 'prop-types'

function Button(props){

	const { text } = props

	return <button>这是一个按钮{text}</button>
}


Button.propTypes = {
	text: PropTypes.any
}

export default Button;