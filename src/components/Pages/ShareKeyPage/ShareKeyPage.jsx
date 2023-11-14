import { useSearchParams } from "react-router-dom";
import "./ShareKeyPage.css";

export default function ShareKeyPage() {
  const [searchParams] = useSearchParams();

  const origin = window.location.origin;
  const boardId = searchParams.get("boardId");

  const url = `${origin}/${boardId}`;

  function clickHandler() {
    navigator.clipboard.writeText(url);
  }

  return (
    <section className="share">
      <h1>{"Here's your key!"}</h1>
      <div className="copyToClipboard">
        <p className="copyToClipboard__value">{boardId}</p>
        <button onClick={clickHandler} className="copyToClipboard__button">Copy</button>
      </div>
    </section>
  );
}
