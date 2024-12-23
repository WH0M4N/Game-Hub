import { GameQuery } from "../App";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const Heading = ({ gameQuery }: Props) => {
  const platformHeading = gameQuery.platform ? gameQuery.platform.name : "";
  const genreHeading = gameQuery.genre ? gameQuery.genre.name : "";
  const finalHeading =
    platformHeading || genreHeading
      ? `${genreHeading} ${platformHeading} Games`
      : "";

  return (
    <Box paddingX={4} marginBottom={2}>
      <Text fontWeight="bold" fontSize="3xl">
        {finalHeading}
      </Text>
    </Box>
  );
};

export default Heading;
