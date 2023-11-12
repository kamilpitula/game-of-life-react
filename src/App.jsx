import "./App.css";
import Header from "./components/Header/Header";
import GamePage from "./components/Pages/GamePage";
import { useParams } from "react-router-dom";

function App() {
  const { boardId } = useParams();
  return (
    <>
      <Header />
      <main>
        {boardId && <h3>{boardId}</h3>}
        <GamePage></GamePage>
      </main>
    </>
  );
}

export default App;
