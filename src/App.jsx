import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import Settings from "./components/Settings/Settings";
import Controls from "./components/Controls/Controls";
import Board from "./components/Board/Board";

function App() {
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

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

  const board = Array(60).fill(Array(60).fill(false));
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
          <Board
            cells={board}
            onCellClicked={(x, y) => console.log(x, y)}
          ></Board>
        </section>
      </main>
    </>
  );
}

export default App;
