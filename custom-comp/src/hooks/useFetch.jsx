import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    url && fetchRequest();
  }, [url]);

  const fetchRequest = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setLoading(true);
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };

  return { data, fetchRequest, isLoading, error };
};
export default useFetch;
