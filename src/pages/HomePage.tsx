import { Grid, Show, GridItem, Heading, HStack } from "@chakra-ui/react";
import GamesGrid from "../components/GamesGrid";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5} marginTop={2}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Heading />
        <HStack paddingX={4} marginBottom={4}>
          <SortSelector />
          <PlatformSelector />
        </HStack>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
