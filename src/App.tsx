import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selecctedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
          <GenreList
            selectedGenre={(genre) => setSelectedGenre(genre)}
            highlightedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          onSelect={(platfrom) => setSelectedPlatform(platfrom)}
          selectedPlatform={selecctedPlatform}
        />
        <GamesGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selecctedPlatform}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
function usestate<T>(): [any, any] {
  throw new Error("Function not implemented.");
}
