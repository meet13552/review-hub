import { Box, Button, HStack, Heading, Image, Show } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding={3} justifyContent={"space-between"}>
      <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
        ReviewHub
      </Heading>
      <HStack>
        <Show breakpoint="(min-width: 751px)">
          <Button colorScheme="teal" leftIcon={<AddIcon />} marginRight={2}>
            Add Review
          </Button>
        </Show>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
