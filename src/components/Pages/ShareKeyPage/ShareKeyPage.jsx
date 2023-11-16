import { useSearchParams } from "react-router-dom";
import "./ShareKeyPage.css";
import CopyToClipboard from "../../UI/CopyToClipboard/CopyToClipboard";

export default function ShareKeyPage() {
  const [searchParams] = useSearchParams();

  const origin = window.location.origin;
  const boardId = searchParams.get("boardId");

  const url = `${origin}/${boardId}`;

  return (
    <section className="share">
      <h1>{"Here's your key!"}</h1>
      <CopyToClipboard content={url} displayValue={boardId}></CopyToClipboard>
    </section>
  );
}
