import React from 'react';
import PropTypes from 'prop-types';

function Tag(props) {
  var text = props.text;
  return /*#__PURE__*/React.createElement("p", null, "\u8FD9\u662F\u4E00\u4E2A\u6807\u7B7E", text);
}

Tag.propTypes = {
  text: PropTypes.any
};
export default Tag;