import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GamesGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return <Text>{error.message}</Text>;

  const fetchedPagesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedPagesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner marginLeft={4} marginY={4} />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          padding="15px"
          spacing={6}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard key={game.id} game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
          {isFetchingNextPage &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))}
        </SimpleGrid>
      </InfiniteScroll>
      {/* <Button
        marginLeft={4}
        marginY={4}
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading" : "Load more"}
      </Button> */}
    </>
  );
};

export default GamesGrid;
