//Single Review Card Component

import React from "react";
import { Text, Card, CardBody, HStack, Button, Box } from "@chakra-ui/react";
import SentimentTag from "./SentimentTag";
import { ArrowDownIcon, ArrowUpIcon, CalendarIcon } from "@chakra-ui/icons";
import { FaThumbsUp } from "react-icons/fa6";
import { FaThumbsDown } from "react-icons/fa6";

interface Props {
  reviewData: {
    id: string;
    review: string;
    sentiment: string;
    dateTime: string;
  };
  handleUpvote: (id: string) => void;
  handleDownvote: (id: string) => void;
  upvotes: number;
  downvotes: number;
}

const ReviewCard = ({
  reviewData,
  handleUpvote,
  handleDownvote,
  upvotes,
  downvotes,
}: Props) => {
  const { id, review, sentiment, dateTime } = reviewData;

  return (
    <Card>
      <CardBody>
        <HStack marginBottom={2}>
          <CalendarIcon color="teal" />
          <Text
            as="b"
            color="teal"
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
          >
            {dateTime}
          </Text>
        </HStack>
        <Text marginBottom={3} fontSize={{ base: "md", md: "lg", lg: "xl" }}>
          {review}
        </Text>
        <HStack justifyContent="space-between">
          <Box>
            <SentimentTag sentiment={sentiment} />
          </Box>
          <Box>
            <HStack>
              <Button
                fontSize={{ base: "2xs", md: "xs", lg: "sm" }}
                colorScheme="green"
                onClick={() => handleUpvote(id)}
              >
                <HStack>
                  <FaThumbsUp />
                  {upvotes > 0 && <span> {upvotes}</span>}
                </HStack>
              </Button>
              <Button
                fontSize={{ base: "2xs", md: "xs", lg: "sm" }}
                colorScheme="red"
                onClick={() => handleDownvote(id)}
              >
                <HStack>
                  <FaThumbsDown />
                  {downvotes > 0 && <span>{downvotes}</span>}
                </HStack>
              </Button>
            </HStack>
          </Box>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ReviewCard;
