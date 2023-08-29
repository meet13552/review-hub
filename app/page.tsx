"use client";

import AddReviewButton from "@/components/AddReviewButton";
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

const Home = () => {
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
        <NavBar />
      </GridItem>
      <GridItem area="main"></GridItem>
      <Show breakpoint="(max-width: 750px)">
        <AddReviewButton />
      </Show>
    </Grid>
  );
};

export default Home;
