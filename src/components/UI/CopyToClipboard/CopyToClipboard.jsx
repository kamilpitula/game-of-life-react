import PropTypes from "prop-types";
import "./CopyToClipboard.css";
import { useState } from "react";

export default function CopyToClipboard({ displayValue, content }) {
  const [copied, setCopied] = useState(false);

  function clickHandler() {
    navigator.clipboard.writeText(content);
    setCopied(true)
  }

  return (
    <div className="copyToClipboard">
      <p className="copyToClipboard__value">{displayValue}</p>
      <button onClick={clickHandler} className="copyToClipboard__button">
        Copy {copied && "✅"}
      </button>
    </div>
  );
}

CopyToClipboard.propTypes = {
  displayValue: PropTypes.string,
  content: PropTypes.string,
};
