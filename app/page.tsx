"use client";

import AddReviewButton from "@/components/AddReviewButton";
import AddReviewPopup from "@/components/AddReviewPopup";
import NavBar from "@/components/NavBar";
import ReviewCard from "@/components/ReviewCard";
import { Grid, GridItem, Show, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

interface ReviewData {
  review: string;
  sentiment: string;
  dateTime: string;
}

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState<ReviewData[]>([]); // Store reviews and sentiment

  // Function to add review and sentiment to the reviews array
  const addReview = (review: string, sentiment: string) => {
    const currentDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata", // IST timezone
    });

    const newReview = {
      review,
      sentiment,
      dateTime: currentDate,
    };

    setReviews([...reviews, newReview]);
  };

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
      <AddReviewPopup
        isOpen={isModalOpen}
        onClose={closeModal}
        addReview={addReview}
      />
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {reviews.map((reviewData, index) => (
          <ReviewCard key={index} reviewData={reviewData} />
        ))}
      </SimpleGrid>
      <Show breakpoint="(max-width: 750px)">
        <AddReviewButton openModal={openModal} />
      </Show>
    </Grid>
  );
};

export default Home;
