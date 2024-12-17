import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImage from "../services/url-image";

interface Props {
  selectedGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenre();

  if (error) return null;

  if (isLoading) return <Spinner marginTop={5} />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImage(genre.image_background)}
            />
            <Button
              fontSize="lg"
              variant="link"
              onClick={() => selectedGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
