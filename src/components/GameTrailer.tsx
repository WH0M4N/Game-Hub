import { Spinner } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);
  const first = data?.results[0];

  if (error) return null;

  if (isLoading) return <Spinner />;

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
