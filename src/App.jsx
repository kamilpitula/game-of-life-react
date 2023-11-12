import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

function App() {
  const { boardId } = useParams();
  return (
    <>
      <Header />
      <main>
        {boardId && <h3>{boardId}</h3>}
        <Outlet />
      </main>
    </>
  );
}

export default App;
