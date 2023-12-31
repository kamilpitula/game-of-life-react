import { PropTypes } from "prop-types";
import Button from "../UI/Button/Button";
import "./Settings.css";
import { useState } from "react";

export default function Settings(props) {
  const [width, setWidth] = useState(60);
  const [height, setHeight] = useState(60);

  return (
    <div className="settings">
      <h2 className="settings__title">Game settings</h2>
      <form></form>
      <div className="settings__inputs">
        <label className="settings__input-label">
          Width:{" "}
          <input
            type="number"
            name="inputWidth"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          ></input>
        </label>
        <label className="settings__input-label">
          Height:{" "}
          <input
            type="number"
            name="inputHeight"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          ></input>
        </label>
      </div>
      <div className="settings__controls">
        <Button
          onClick={() => props.onApply({ width: +width, height: +height })}
          style={{ margin: "0" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8.5 12.5L10.5 14.5L15.5 9.5"
              stroke="#1C274C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
              stroke="#1C274C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Button>
        <Button
          onClick={props.onCancel}
          className="settings__button"
          style={{ margin: "0 0.5rem" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
              stroke="#1C274C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
              stroke="#1C274C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}

Settings.propTypes = {
  onCancel: PropTypes.func,
  onApply: PropTypes.func,
};
