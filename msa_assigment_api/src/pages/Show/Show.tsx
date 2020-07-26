import React, { useState, useEffect } from "react";
import axios from "axios";

const Show: React.FC<any> = (props) => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function getMoives() {
      try {
        setLoading(true);
        const res = await axios.get(
          `http://www.omdbapi.com/?apikey=cfa46e04&&i=${props.match.params.id}`
        );
        setMovie(res.data);
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    }

    getMoives();
  }, [props.match.params.id]);
  return <div>{JSON.stringify(movie)}</div>;
};

export default Show;
