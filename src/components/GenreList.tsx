import React from "react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres, error } = useGenre();

  return (
    <div>
      <ul>
        {error && <p>{error}</p>}
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
