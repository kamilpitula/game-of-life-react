import "./App.css";
import Header from "./components/Header/Header";
import GamePage from "./components/Pages/GamePage";

function App() {
  return (
    <>
      <Header />
      <main>
        <GamePage></GamePage>
      </main>
    </>
  );
}

export default App;
