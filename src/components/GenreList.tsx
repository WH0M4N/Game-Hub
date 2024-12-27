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
import useGenre from "../hooks/useGenre";
import getCroppedImage from "../services/url-image";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading } = useGenre();
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenre);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

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
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.id === selectedGenreId ? (
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
