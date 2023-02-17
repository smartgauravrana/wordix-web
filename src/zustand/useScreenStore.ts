import { SCREENS } from "@/constants";
import { create } from "zustand";

interface ScreenState {
  screen: string;
  setScreen: (screen: string) => void;
  setGameplay: () => void;
}

export const useScreenStore = create<ScreenState>((set) => ({
  screen: SCREENS.START,
  setScreen: (screen: string) => set({ screen }),
  setGameplay: () => set({ screen: SCREENS.GAMEPLAY }),
}));
