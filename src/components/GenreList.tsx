import useGenre, { Genre } from "../hooks/useGenre";

const GenreList = () => {
  const { data, error } = useGenre();

  return (
    <div>
      <ul>
        {error && <p>{error}</p>}
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
