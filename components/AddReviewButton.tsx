import { AddIcon } from "@chakra-ui/icons";
import { Button, IconButton } from "@chakra-ui/react";
import React from "react";

const AddReviewButton = () => {
  return (
    <IconButton
      aria-label="Add Review"
      isRound={true}
      position="fixed"
      bottom="2rem"
      right="2rem"
      size="lg"
      colorScheme="teal"
      icon={<AddIcon />}
    ></IconButton>
  );
};

export default AddReviewButton;
