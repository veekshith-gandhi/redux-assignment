import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import useTimer from "../../hooks/useTimer";

const Timer = () => {
  const { value, startTimer, pauseTimer, resetTimer } = useTimer({
    initalValue: 9,
  });
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(
    "https://api.github.com/search/users?q=4masai"
  );
  const { data, isLoading, error } = useFetch(url + `&page=${page}`);

  return (
    <div>
      <h1>counter timer</h1>
      <h1>{value}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
      <hr />
      <h1>Fetch</h1>
      <button disabled={page === 0} onClick={() => setPage((prev) => prev - 1)}>
        PREV
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>NEXT</button>
      <div>{isLoading && "LOADING...."}</div>
      <div>
        {data?.items?.map((item) => {
          return <div key={item.login}>{item.login}</div>;
        })}
      </div>
    </div>
  );
};
export default Timer;
