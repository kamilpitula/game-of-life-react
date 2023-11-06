import { useCallback, useEffect, useState } from "react";
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
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    let frameId;
    const tick = () => {
      if (!isRunning) return;
      const newBoard = Game.tick(board);
      setBoard(newBoard);
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [board, isRunning]);

  const userClickedCellHandler = useCallback(
    (positionX, positionY) => handleCellStateChanged(positionX, positionY),
    []
  );

  function startGame() {
    setRunning(true);
  }

  function stopGame() {
    setRunning(false);
  }

  function closeSettings() {
    setSettingsModalOpen(false);
  }

  function openSettings() {
    setSettingsModalOpen(true);
  }

  function applySettingsHandler(opt) {
    setSettingsModalOpen(false);
    setRunning(false);
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
