import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  var text = props.text;
  return /*#__PURE__*/React.createElement("button", null, "\u8FD9\u662F\u4E00\u4E2A\u6309\u94AE", text);
}

Button.propTypes = {
  text: PropTypes.any
};
export default Button;