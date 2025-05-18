import api from "@/services/api";
import { useState, useEffect } from "react";

const useFetch = (endpoint, params = {}, timeout = 0) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const res = await api.get(endpoint, { params });
        setData(await res.data);
      } catch (error) {
        setError(error?.message);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(() => fetchData(), timeout);
  }, [endpoint, JSON.stringify(params)]);

  return { data, loading, error };
};

export default useFetch;
