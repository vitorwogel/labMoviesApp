import { useEffect, useState } from "react";
import {getUpcoming} from '../api/tmdb-api'

const useUpcoming = id => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getUpcoming(id).then(movie => {
      getUpcoming(movie);
    });
  }, [id]);
  return [movie, setMovie];
};

export default useUpcoming