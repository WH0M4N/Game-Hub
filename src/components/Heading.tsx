import { GameQuery } from "../App";
import { Box, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const Heading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatform();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""}`;

  return (
    <Box paddingX={4} marginBottom={2}>
      <Text fontWeight="bold" fontSize="3xl">
        {`${heading} Games`}
      </Text>
    </Box>
  );
};

export default Heading;
