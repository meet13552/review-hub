import React from "react";
import { Box, Text, Badge } from "@chakra-ui/react";

interface Props {
  reviewData: {
    review: string;
    highestScoreLabel: string;
    dateTime: string;
  };
}

const ReviewCard = ({ reviewData }: Props) => {
  const { review, highestScoreLabel, dateTime } = reviewData;

  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" m="4">
      <Text>{review}</Text>
      <Badge mt="2" colorScheme="teal">
        {highestScoreLabel}
      </Badge>
      <p>Posted on: {dateTime}</p>
    </Box>
  );
};

export default ReviewCard;
