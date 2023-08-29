import { Button, HStack, Heading, Image } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding={3} justifyContent={"space-between"}>
      <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
        ReviewHub
      </Heading>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
