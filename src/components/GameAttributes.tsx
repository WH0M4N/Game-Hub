import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode | ReactNode[];
}

const GameAttributes = ({ heading, children }: Props) => {
  return (
    <Box padding={5}>
      <Heading color="gray.600" marginY={2}>
        {heading}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default GameAttributes;
