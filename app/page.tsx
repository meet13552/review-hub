"use client";

import AddReviewButton from "@/components/AddReviewButton";
import AddReviewPopup from "@/components/AddReviewPopup";
import NavBar from "@/components/NavBar";
import {
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Show,
} from "@chakra-ui/react";
import { useState } from "react";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
      }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar openModal={openModal} />
      </GridItem>
      <GridItem area="main"></GridItem>
      <AddReviewPopup isOpen={isModalOpen} onClose={closeModal} />
      <Show breakpoint="(max-width: 750px)">
        <AddReviewButton openModal={openModal} />
      </Show>
    </Grid>
  );
};

export default Home;
