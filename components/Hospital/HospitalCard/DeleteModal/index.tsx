import FlexContainer from "@/components/FlexContainer";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { H3, Text } from "@/components/Typography";

interface IDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal: React.FC<IDeleteModalProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <FlexContainer
        $direction="column"
        $width="100%"
        $height="100%"
        $align="flex-start"
      >
        <H3>Are you sure you want to delete?</H3>
        <FlexContainer
          $justify="center"
          $align="flex-start"
          $gap="1em"
          $height="100%"
        >
          <Text>This action cannot be undone.</Text>
        </FlexContainer>

        <FlexContainer
          $justify="flex-end"
          $align="center"
          $gap="0.5em"
          $margin="2em 0 0 0"
          $width="100%"
        >
          <Button $variant="accent" onClick={onDelete}>
            Delete
          </Button>
          <Button $variant="secondary" onClick={onClose}>
            Cancel
          </Button>
        </FlexContainer>
      </FlexContainer>
    </Modal>
  );
};

export default DeleteModal;
