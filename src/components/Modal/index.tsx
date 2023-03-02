import { MODAL_TYPES } from "@/constants";
import useModalStore from "@/zustand/useModal";
import React, { useEffect } from "react";
import HintModal from "../HintModal";
import HowToPlayModal from "../HowToPlayModal";
import MuiModal from "@mui/material/Modal";

const MODAL_COMPONENTS = {
  [MODAL_TYPES.HINT_MODAL]: HintModal,
  [MODAL_TYPES.HOW_TO_PLAY_MODAL]: HowToPlayModal,
};

type Props = {};

function Modal({}: Props) {
  const { modalType, modalProps, hideModal } = useModalStore(
    ({ modalType, modalProps, hideModal }) => ({
      modalType,
      modalProps,
      hideModal,
    })
  );
  const SpecificModal = MODAL_COMPONENTS[modalType];
  console.log("modal: ", modalType);

  const rootElement =
    typeof window !== "undefined" ? document.getElementById("__next") : null;

  useEffect(() => {
    if (modalType) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalType]);
  return (
    modalType && (
      <MuiModal
        container={rootElement}
        open={Boolean(modalType)}
        onClose={hideModal}
      >
        <SpecificModal {...modalProps} />
      </MuiModal>
    )
  );
}

export default Modal;
