"use client";

import AddReviewButton from "@/components/AddReviewButton";
import AddReviewPopup from "@/components/AddReviewPopup";
import NavBar from "@/components/NavBar";
import ReviewCard from "@/components/ReviewCard";
import { Grid, GridItem, Show, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

//Interface for Reviews
interface ReviewData {
  id: string;
  review: string;
  sentiment: string;
  dateTime: string;
}

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState<ReviewData[]>([]); // Store reviews and sentiment

  // Track upvotes and downvotes for each review
  const [upvotes, setUpvotes] = useState<{ [key: string]: number }>({}); //Store upvotes
  const [downvotes, setDownvotes] = useState<{ [key: string]: number }>({}); //Store downvotes

  // Function to add review and sentiment to the reviews array
  const addReview = (review: string, sentiment: string) => {
    const currentDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    //Reviewr array new object
    const newReview = {
      id: uuidv4(), // Generate a unique ID
      review,
      sentiment,
      dateTime: currentDate,
    };

    //Adding newly created object to array
    setReviews([...reviews, newReview]);

    //Setting upvotes to 0
    setUpvotes((prevUpvotes) => ({ ...prevUpvotes, [newReview.id]: 0 }));

    //Setting downvotes to 0
    setDownvotes((prevDownvotes) => ({ ...prevDownvotes, [newReview.id]: 0 }));
  };

  //Function for opening modal (popup)
  const openModal = () => {
    setIsModalOpen(true);
  };

  //Function for closing modal (popup)
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Add upvote to a review
  const handleUpvote = (id: string) => {
    setUpvotes((prevUpvotes) => {
      const newUpvotes = { ...prevUpvotes };
      newUpvotes[id] = (prevUpvotes[id] || 0) + 1;
      return newUpvotes;
    });
  };

  const handleDownvote = (id: string) => {
    setDownvotes((prevDownvotes) => {
      const newDownvotes = { ...prevDownvotes };
      newDownvotes[id] = (prevDownvotes[id] || 0) + 1;
      return newDownvotes;
    });
  };

  // Function to sort reviews based on upvotes + downvotes
  const sortReviews = () => {
    const sortedReviews = [...reviews].sort((a, b) => {
      const totalVotesA = (upvotes[a.id] || 0) + (downvotes[a.id] || 0);
      const totalVotesB = (upvotes[b.id] || 0) + (downvotes[b.id] || 0);

      console.log(
        `Review A: ${totalVotesA} votes, Review B: ${totalVotesB} votes`
      );

      return totalVotesB - totalVotesA;
    });

    setReviews(sortedReviews);
  };

  useEffect(() => {
    sortReviews();
  }, [upvotes, downvotes]);

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
          <ReviewCard
            key={reviewData.id}
            reviewData={reviewData}
            handleUpvote={handleUpvote}
            handleDownvote={handleDownvote}
            upvotes={upvotes[reviewData.id] || 0}
            downvotes={downvotes[reviewData.id] || 0}
          />
        ))}
      </SimpleGrid>
      <Show breakpoint="(max-width: 750px)">
        <AddReviewButton openModal={openModal} />
      </Show>
    </Grid>
  );
};

export default Home;
