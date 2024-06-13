import ReactDOM from "react-dom";
import IconButton from "./IconButton";
import { FaX } from "react-icons/fa6";
import FlexContainer from "./ContainerFlex";
interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const Modal: React.FC<IModalProps> = ({
  isOpen,
  onClose,
  children,
  width,
  height,
}) => {
  const modalRoot = document.getElementById("modal-root");
  if (!isOpen || !modalRoot) return null;
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClose}
    >
      <FlexContainer
        $width={width || "500px"}
        $height={height || "auto"}
        $bgcolor="var(--surface-color)"
        $padding="2em"
        $position="relative"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <IconButton
          onClick={onClose}
          style={{ position: "absolute", right: "2em" }}
          variant="text"
        >
          <FaX size={24} />
        </IconButton>
      </FlexContainer>
    </div>,
    modalRoot
  );
};

export default Modal;
