import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import {
  Box,
  Button,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
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
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <GridItem>
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
          </Box>
          <GameAttributesList game={game} />
        </GridItem>
        <GridItem>
          <Box padding={5}>
            <GameTrailer gameId={game.id} />
          </Box>
          <Box padding={5}>
            <GameScreenshot gameId={game.id} />
          </Box>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GamesDetailPage;
