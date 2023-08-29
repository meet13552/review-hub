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
} from "@chakra-ui/react";
import { color } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function CustomModal({ isOpen, onClose }: Props) {
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
          <Textarea placeholder="Write review here..." resize="none" h="50vh" />
        </ModalBody>

        <ModalFooter justifyContent="center">
          <Button
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            colorScheme="teal"
            onClick={onClose}
          >
            Analyze
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CustomModal;
