import { SimpleGrid, Spinner, Image } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenshot";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshot(gameId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((screenshot) => (
        <Image
          key={screenshot.id}
          src={screenshot.image}
          _hover={{
            transform: "scale(1.03)",
            transition: "all 0.1s ease-in-out",
          }}
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
