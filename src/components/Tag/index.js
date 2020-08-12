import React from 'react'
import PropTypes from 'prop-types'

function Tag(props){

	const { text } = props

	return <p>这是一个标签{text}</p>
}


Tag.propTypes = {
	text: PropTypes.any
}

export default Tag;