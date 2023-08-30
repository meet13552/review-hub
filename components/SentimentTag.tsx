import positive from "../assets/positive.webp";
import negative from "../assets/negative.webp";
import neutral from "../assets/neutral.webp";
import {
  Avatar,
  AvatarProps,
  HStack,
  Heading,
  Image,
  ImageProps,
  Tag,
  TagLabel,
  TagProps,
} from "@chakra-ui/react";

interface Props {
  sentiment: string;
}

const SentimentTag = ({ sentiment }: Props) => {
  const emojiMap: { [key: string]: AvatarProps } = {
    Positive: {
      src: positive.src,
      size: "xs",
      name: "Positive",
    },
    Negative: {
      src: negative.src,
      size: "xs",
      name: "Negative",
    },
    Neutral: {
      src: neutral.src,
      size: "xs",
      name: "Neutral",
    },
  };

  const colorMap: { [key: string]: TagProps } = {
    Positive: { colorScheme: "green", size: "lg", borderRadius: "full" },
    Negative: { colorScheme: "red", size: "lg", borderRadius: "full" },
    Neutral: { colorScheme: "yellow", size: "lg", borderRadius: "full" },
  };

  return (
    <Tag {...colorMap[sentiment]}>
      <Avatar {...emojiMap[sentiment]} />
      <TagLabel marginLeft={1} marginRight={1}>
        {sentiment}
      </TagLabel>
    </Tag>
  );
};

export default SentimentTag;
