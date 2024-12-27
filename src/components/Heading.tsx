import { Box, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const Heading = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const { data: genres } = useGenre();
  const genre = genres?.results.find((g) => g.id === selectedGenreId);

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const { data: platforms } = usePlatform();
  const platform = platforms?.results.find((p) => p.id === selectedPlatformId);

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
