import PropTypes from "prop-types";
import "./Cell.css";
import { memo } from "react";

const Cell = memo(function Cell(props) {
  const classes = [
    "board__cell",
    props.isAlive ? "board__cell--alive" : "",
    props.visitedBefore ? "board__cell--visited-before": ""
  ].join(" ");

  return (
    <button
      className={classes}
      onClick={() => props.onClick(props.positionX, props.positionY)}
    ></button>
  );
});

Cell.propTypes = {
  isAlive: PropTypes.bool,
  visitedBefore: PropTypes.bool,
  positionX: PropTypes.number,
  positionY: PropTypes.number,
  onClick: PropTypes.func,
};

export default Cell;
