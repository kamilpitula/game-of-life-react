import PropTypes from "prop-types";
import "./Cell.css";

export default function Cell(props) {
  const classes = [
    "board__cell",
    props.isAlive ? "board__cell--alive" : "",
  ].join(" ");

  return (
    <button
      className={classes}
      onClick={() => props.onClick(props.positionX, props.positionY)}
    ></button>
  );
}

Cell.propTypes = {
  isAlive: PropTypes.bool,
  positionX: PropTypes.number,
  positionY: PropTypes.number,
  onClick: PropTypes.func,
};
