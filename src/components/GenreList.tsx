import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImage from "../services/url-image";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";

const GenreList = () => {
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
