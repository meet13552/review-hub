"use client";

import NavBar from "@/components/NavBar";
import {
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
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
    </Grid>
  );
};

export default Home;
