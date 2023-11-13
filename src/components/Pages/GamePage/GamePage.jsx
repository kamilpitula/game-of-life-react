import Controls from "../../Controls/Controls";
import Board from "../../Board/Board";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Settings from "../../Settings/Settings";
import { useState, useCallback, useEffect } from "react";
import Game from "../../../game/game";
import { downloadFile } from "../../../utils/fileDownload";
import { exportToLife106 } from "../../../export/exportLife106";
// import { saveBoard } from "../../../../api/share/shareVercel";
import { useNavigate } from "react-router-dom";
import "./GamePage.css";

export default function GamePage() {
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [board, setBoard] = useState(Game.createNewBoard(60, 60));
  const [isRunning, setRunning] = useState(false);
  const navigate = useNavigate();

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
    setBoard(Game.createNewBoard(60, 60));
  }

  function exportBoard() {
    const exportedBoard = exportToLife106(board);
    downloadFile(exportedBoard, "pattern.life");
  }

  async function shareBoard() {
    try {
      const res = await fetch("/api/share",{
        method: "POST",
        body: JSON.stringify(board),
        
      })
      const response = await res.json();
      navigate(`../share?boardId=${response.key}`);
    } catch (ex) {
      //TODO: redirect to error page
      console.log("Failed!");
      console.log(ex);
    }
  }

  function handleCellStateChanged(positionX, positionY) {
    setBoard((oldBoard) =>
      Game.changeCellState(oldBoard, positionX, positionY)
    );
  }
  return (
    <section className="game">
      {settingsModalOpen && (
        <Backdrop onClick={closeSettings}>
          <Settings
            onCancel={closeSettings}
            onApply={applySettingsHandler}
          ></Settings>
        </Backdrop>
      )}
      <Controls
        onSettings={openSettings}
        onRun={startGame}
        onStop={stopGame}
        onRestart={resetGame}
        onExport={exportBoard}
        onShare={shareBoard}
        isRunning={isRunning}
      ></Controls>
      <Board cells={board} onCellClicked={userClickedCellHandler}></Board>
    </section>
  );
}
