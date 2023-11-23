import React from "react";
import PropTypes from "prop-types";

// For the Button Component, we also add real time validation...
// @children -> We are going to be wrapping the component around the text for the button. That will be the children
// @version -> primary or secondary, and that will pertain to a specific class
// @type -> normal button or submit button
// @isDisabled -> set to T = Button is disabled, set to F = Button is not disabled.
function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = { version: "primary", type: "button", isDisabled: false };
Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
