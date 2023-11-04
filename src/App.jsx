import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import Settings from "./components/Settings/Settings";
import Controls from "./components/Controls/Controls";
import Board from "./components/Board/Board";

function App() {
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  const [board, setBoard] = useState(Array(60).fill(Array(60).fill(false)));

  function closeSettings() {
    setSettingsModalOpen(false);
  }

  function openSettings() {
    setSettingsModalOpen(true);
  }

  function applySettingsHandler(opt) {
    setSettingsModalOpen(false);
    console.log(opt);
  }

  function handleCellStateChanged(positionX, positionY) {
    const newBoard = board.map((column, y) => {
      if (y === positionY)
        return column.map((row, x) => {
          if (x === positionX) return !row;
          return row;
        });
      return column;
    });
    setBoard(newBoard);
  }

  return (
    <>
      {settingsModalOpen && (
        <Backdrop onClick={closeSettings}>
          <Settings
            onCancel={closeSettings}
            onApply={(opts) => applySettingsHandler(opts)}
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
