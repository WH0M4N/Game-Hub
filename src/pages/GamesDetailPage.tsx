import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, Button, Heading, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import GameAttributesList from "../components/GameAttributesList";
import GameTrailer from "../components/GameTrailer";
import GameScreenshot from "../components/GameScreenshot";

const GamesDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);
  const limit = 350;
  const [isExpanded, setExpanded] = useState(false);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  const summary = isExpanded
    ? game?.description_raw
    : game?.description_raw.slice(0, limit);

  if (game === undefined) return null;

  return (
    <>
      <Box padding={5}>
        <Heading>{game.name}</Heading>
        <Text>
          {isExpanded ? `${summary}  ` : `${summary}...  `}
          <Button
            size="xs"
            fontWeight="bold"
            colorScheme="yellow"
            onClick={() => setExpanded(!isExpanded)}
          >
            {isExpanded ? "Show less" : "Show more"}
          </Button>
        </Text>
        <GameAttributesList game={game} />
        <GameTrailer gameId={game.id} />
        <GameScreenshot gameId={game.id} />
      </Box>
    </>
  );
};

export default GamesDetailPage;
