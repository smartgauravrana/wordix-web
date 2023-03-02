import { create } from "zustand";

const initialState = {
  modalType: null,
  modalProps: {},
};

interface ModalStore {
  modalType: any;
  modalProps: any;
  showModal: (payload: any) => void;
  hideModal: () => void;
  updateModalProps: (payload: any) => void;
}

const useModalStore = create<ModalStore>((set) => ({
  ...initialState,
  showModal: (payload) =>
    set({
      modalType: payload.modalType,
      modalProps: payload.modalProps || {},
    }),
  hideModal: () => set(initialState),
  updateModalProps: (payload) =>
    set({
      modalProps: payload || {},
    }),
}));

export default useModalStore;
