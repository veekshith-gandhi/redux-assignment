import { useEffect, useState } from "react";

const useTimeout = (time: number) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, time);
  }, [time]);

  return { ready };
};
export default useTimeout;
