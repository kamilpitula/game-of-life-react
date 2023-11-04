import "./Backdrop.css";
import { PropTypes } from "prop-types";

export default function Backrop(props) {
  return (
    <div className="backdrop" onClick={props.onClick}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
}

Backrop.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.element,
  onClick: PropTypes.func,
};
