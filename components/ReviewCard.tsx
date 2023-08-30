import React from "react";
import {
  Box,
  Text,
  Badge,
  Card,
  CardBody,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import SentimentTag from "./SentimentTag";
import { CalendarIcon } from "@chakra-ui/icons";

interface Props {
  reviewData: {
    review: string;
    sentiment: string;
    dateTime: string;
  };
}

const ReviewCard = ({ reviewData }: Props) => {
  const { review, sentiment, dateTime } = reviewData;

  return (
    <Card>
      <CardBody>
        <HStack marginBottom={2}>
          <CalendarIcon color="teal" />
          <Text as="b" color="teal">
            {dateTime}
          </Text>
        </HStack>
        <Text marginBottom={3} fontSize="xl">
          {review}
        </Text>
        <SentimentTag sentiment={sentiment} />
      </CardBody>
    </Card>
  );
};

export default ReviewCard;
