import { useSearchParams } from "react-router-dom";

export default function ShareKeyPage() {
  const [searchParams] = useSearchParams();

  const origin = window.location.origin;
  const boardId = searchParams.get("boardId");

  const url = `${origin}/${boardId}`;

  return (
    <section>
      {/* TODO: create copy to clipboard component */}
      <h2>{`Here's your key: ${url}`}</h2>
    </section>
  );
}
