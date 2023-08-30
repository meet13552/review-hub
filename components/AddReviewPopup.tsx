import { analyzeSentiment } from "@/services/api-client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ModalCloseButton,
  Textarea,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SentimentTag from "./SentimentTag";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  addReview: (review: string, highestScoreLabel: string) => void;
}

function AddReviewPopup({ isOpen, onClose, addReview }: Props) {
  const [reviewText, setReviewText] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // State to store error message

  useEffect(() => {
    if (!isOpen) {
      // Reset the state when the modal is closed
      setReviewText("");
      setSentiment("");
      setError(null);
    }
  }, [isOpen]);

  const handleAnalyzeClick = async () => {
    if (!reviewText.trim()) {
      setError("Review cannot be empty.");
      return;
    }
    setIsLoading(true);
    setError(null); // Clear any previous error messages
    try {
      const sentiment = await analyzeSentiment(reviewText);
      setSentiment(sentiment);

      // Add review and highestScoreLabel to the main page
      addReview(reviewText, sentiment);
    } catch (error) {
      // Handle error if needed
      // Handle error and set error message
      console.error("Error analyzing sentiment:", error);
      setError("An error occurred while analyzing sentiment.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "xs", sm: "sm", md: "md", lg: "2xl" }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            Add a Review
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea
            isDisabled={isLoading}
            placeholder="Write review here..."
            resize="none"
            h="50vh"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          {sentiment && (
            <HStack justifyContent="center" marginTop={4}>
              <SentimentTag sentiment={sentiment} />
            </HStack>
          )}
          {error && (
            <Alert status="error" mt={2}>
              <AlertIcon />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
        </ModalBody>

        <ModalFooter justifyContent="center">
          <Button
            isLoading={isLoading}
            loadingText="Analyzing"
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            colorScheme="teal"
            onClick={handleAnalyzeClick}
            disabled={isLoading}
          >
            Analyze
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddReviewPopup;
