import { useCallback, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import Settings from "./components/Settings/Settings";
import Controls from "./components/Controls/Controls";
import Board from "./components/Board/Board";
import Game from "./game/game";
import game from "./game/game";

function App() {
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [board, setBoard] = useState(Game.createNewBoard(60, 60));
  const [interval, setInterval] = useState(null);

  const userClickedCellHandler = useCallback(
    (positionX, positionY) => handleCellStateChanged(positionX, positionY),
    []
  );

  function tickHandler() {
    const interval = requestAnimationFrame(tickHandler);
    setInterval(interval);
    //TODO: game update
    console.log(performance.now(), interval);
  }

  function startGame() {
    requestAnimationFrame(tickHandler);
  }

  function stopGame() {
    cancelAnimationFrame(interval);
    setInterval(null);
  }

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

  function resetGame() {
    stopGame();
    setBoard(game.createNewBoard(60, 60));
  }

  function handleCellStateChanged(positionX, positionY) {
    setBoard((oldBoard) =>
      Game.changeCellState(oldBoard, positionX, positionY)
    );
  }

  const isRunning = interval ? true : false;

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
          <Controls
            onSettings={openSettings}
            onRun={startGame}
            onStop={stopGame}
            onRestart={resetGame}
            isRunning={isRunning}
          ></Controls>
          <Board cells={board} onCellClicked={userClickedCellHandler}></Board>
        </section>
      </main>
    </>
  );
}

export default App;
