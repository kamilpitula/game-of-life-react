import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import Settings from "./components/Settings/Settings";
import Controls from "./components/Controls/Controls";
import Board from "./components/Board/Board";
import Game from "./game/game";

function App() {
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  const [board, setBoard] = useState(Game.createNewBoard(60, 60));

  function closeSettings() {
    setSettingsModalOpen(false);
  }

  function openSettings() {
    setSettingsModalOpen(true);
  }

  function applySettingsHandler(opt) {
    setSettingsModalOpen(false);
    setBoard(Game.createNewBoard(opt.width, opt.height));
    console.log(opt);
  }

  function handleCellStateChanged(positionX, positionY) {
    const newBoard = Game.changeCellState(board, positionX, positionY);
    setBoard(newBoard);
  }

  return (
    <>
      {settingsModalOpen && (
        <Backdrop onClick={closeSettings}>
          <Settings
            onCancel={closeSettings}
            onApply={applySettingsHandler}
          ></Settings>
        </Backdrop>
      )}
      <Header />
      <main>
        <section className="game">
          <Controls onSettings={openSettings}></Controls>
          <Board cells={board} onCellClicked={handleCellStateChanged}></Board>
        </section>
      </main>
    </>
  );
}

export default App;
