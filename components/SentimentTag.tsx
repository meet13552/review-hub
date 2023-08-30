// Sentiment Tag with Emoji Component

import positive from "../assets/positive.webp";
import negative from "../assets/negative.webp";
import neutral from "../assets/neutral.webp";
import { Avatar, AvatarProps, Tag, TagLabel, TagProps } from "@chakra-ui/react";

interface Props {
  sentiment: string;
}

const SentimentTag = ({ sentiment }: Props) => {
  const emojiMap: { [key: string]: AvatarProps } = {
    Positive: {
      src: positive.src,
      size: { base: "2xs", md: "xs", lg: "xs" },
      name: "Positive",
    },
    Negative: {
      src: negative.src,
      size: { base: "2xs", md: "xs", lg: "xs" },
      name: "Negative",
    },
    Neutral: {
      src: neutral.src,
      size: { base: "2xs", md: "xs", lg: "xs" },
      name: "Neutral",
    },
  };

  const colorMap: { [key: string]: TagProps } = {
    Positive: {
      colorScheme: "green",
      size: { base: "sm", md: "lg", lg: "lg" },
      borderRadius: "full",
    },
    Negative: {
      colorScheme: "red",
      size: { base: "sm", md: "lg", lg: "lg" },
      borderRadius: "full",
    },
    Neutral: {
      colorScheme: "yellow",
      size: { base: "sm", md: "lg", lg: "lg" },
      borderRadius: "full",
    },
  };

  return (
    <Tag {...colorMap[sentiment]} h={10}>
      <Avatar {...emojiMap[sentiment]} />
      <TagLabel
        marginLeft={1}
        marginRight={1}
        fontSize={{ base: "2xs", md: "xs", lg: "sm" }}
      >
        {sentiment}
      </TagLabel>
    </Tag>
  );
};

export default SentimentTag;
