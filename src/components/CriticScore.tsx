import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 80 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge fontSize="14px" borderRadius={4} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
