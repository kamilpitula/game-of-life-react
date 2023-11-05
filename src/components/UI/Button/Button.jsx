import PropTypes from "prop-types";
import "./Button.css";

export default function Button(props) {
  return (
    <button
      disabled={props.disabled}
      className="control-button"
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  style: PropTypes.object,
  disabled: PropTypes.bool,
};
