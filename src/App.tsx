import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import Heading from "./components/Heading";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import useGameQueryStore from "./store";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
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

export default App;
