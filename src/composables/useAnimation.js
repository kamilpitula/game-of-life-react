import { useEffect, useRef, useState } from "react";

export default function useAnimation(
  initialState,
  updateAnimationState,
  isRunning
) {
  const [animationState, setAnimationState] = useState(initialState);
  const updateAnimation = useRef(null);

  useEffect(() => {
    updateAnimation.current = updateAnimationState;
  }, [updateAnimationState]);

  useEffect(() => {
    let frameId;
    const tick = () => {
      if (!isRunning) return;
      setAnimationState((oldBoard) => {
        if (updateAnimation.current) return updateAnimation.current(oldBoard);
      });

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [isRunning]);

  return [animationState, setAnimationState];
}
