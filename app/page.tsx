"use client";

import AddReviewButton from "@/components/AddReviewButton";
import AddReviewPopup from "@/components/AddReviewPopup";
import NavBar from "@/components/NavBar";
import ReviewCard from "@/components/ReviewCard";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";

interface ReviewData {
  review: string;
  highestScoreLabel: string;
  dateTime: string;
}

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState<ReviewData[]>([]); // Store reviews and highestScoreLabel

  // Function to add review and highestScoreLabel to the reviews array
  const addReview = (review: string, highestScoreLabel: string) => {
    const currentDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata", // IST timezone
    });

    const newReview = {
      review,
      highestScoreLabel,
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
      {reviews.map((reviewData, index) => (
        <ReviewCard key={index} reviewData={reviewData} />
      ))}
      <Show breakpoint="(max-width: 750px)">
        <AddReviewButton openModal={openModal} />
      </Show>
    </Grid>
  );
};

export default Home;
