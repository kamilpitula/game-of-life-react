import { useEffect, useState } from "react";

export default function useAnimation(initialState, uodateState, isRunning) {
  const [animationState, setAnimationState] = useState(initialState);

  useEffect(() => {
    let frameId;
    const tick = () => {
      if (!isRunning) return;
      setAnimationState((oldBoard) => uodateState(oldBoard));
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [isRunning, uodateState]);

  return [animationState, setAnimationState];
}
