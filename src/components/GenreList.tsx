import {
  Button,
  Heading,
  Highlight,
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
  highlightedGenreId?: number;
}

const GenreList = ({ selectedGenre, highlightedGenreId }: Props) => {
  const { data, error, isLoading } = useGenre();

  // if (error) return null;

  if (isLoading) return <Spinner marginTop={5} />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImage(genre.image_background)}
              />
              <Button
                fontSize="lg"
                variant="unstyled"
                whiteSpace="normal"
                textAlign="left"
                onClick={() => selectedGenre(genre)}
              >
                {genre.id === highlightedGenreId ? (
                  <Highlight
                    query={genre.name}
                    styles={{
                      px: "7px",
                      py: "3px",
                      bg: "gray.400",
                      borderRadius: "10px",
                    }}
                  >
                    {genre.name}
                  </Highlight>
                ) : (
                  genre.name
                )}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
