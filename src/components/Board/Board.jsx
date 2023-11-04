import PropTypes from "prop-types";
import "./Board.css";
import Cell from "./Cell/Cell";

export default function Board(props) {
  const boardElements = props.cells.map((column, y) => {
    const row = column.map((isAlive, x) => {
      return (
        <Cell
          key={`${x}__${y}`}
          isAlive={isAlive}
          positionX={x}
          positionY={y}
          onClick={props.onCellClicked}
        ></Cell>
      );
    });
    return (
      <div className="board__row" key={y}>
        {row}
      </div>
    );
  });
  return <div className="board">{boardElements}</div>;
}

Board.propTypes = {
  cells: PropTypes.array,
  onCellClicked: PropTypes.func,
};
