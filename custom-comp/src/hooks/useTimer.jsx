import { useEffect, useRef, useState } from "react";

const useTimer = ({ initalValue = 0 }) => {
  const [value, setValue] = useState(initalValue);
  const ref = useRef(null);

  useEffect(() => {
    // cleanup
    return pauseTimer;
  });

  const startTimer = () => {
    if (!ref.current) {
      ref.current = setInterval(() => {
        setValue((prev) => {
          if (prev - 1 === 0) {
            pauseTimer();
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const pauseTimer = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const resetTimer = () => {
    pauseTimer();
    setValue(initalValue);
  };
  return { value, startTimer, resetTimer, pauseTimer };
};
export default useTimer;
