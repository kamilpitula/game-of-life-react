import PropTypes from "prop-types";
import "./CopyToClipboard.css";
import { useState } from "react";

export default function CopyToClipboard({ displayValue, content }) {
  const [copied, setCopied] = useState(false);

  function clickHandler() {
    navigator.clipboard.writeText(content);
    setCopied(true);
  }

  const classes = [
    "copyToClipboard__button",
    copied ? "copyToClipboard__button--copied" : "",
  ].join(" ");

  return (
    <div className="copyToClipboard">
      <p className="copyToClipboard__value">{displayValue}</p>
      <button onClick={clickHandler} className={classes}>
        {copied ? (
          <p>
            Copied <span className="copyToClipboard__emoji">✅</span>
          </p>
        ) : (
          <p>Copy</p>
        )}
      </button>
    </div>
  );
}

CopyToClipboard.propTypes = {
  displayValue: PropTypes.string,
  content: PropTypes.string,
};
