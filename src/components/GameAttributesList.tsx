import { SimpleGrid } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import GameAttributes from "./GameAttributes";
import Game from "../entities/Game";
import { Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameAttributesList = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <GameAttributes heading="platforms">
        {game?.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </GameAttributes>
      <GameAttributes heading="Score">
        <CriticScore score={game.metacritic} />
      </GameAttributes>
      <GameAttributes heading="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GameAttributes>
      <GameAttributes heading="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </GameAttributes>
    </SimpleGrid>
  );
};

export default GameAttributesList;
