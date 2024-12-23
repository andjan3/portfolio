import { create } from "zustand";

interface IsOpenMenu {
  open: boolean;
  setIsOpenMenu: (value: boolean) => void;
  rotateHamburger: boolean;
  setRotateHamburger: (value: boolean) => void;
}

const useStore = create<IsOpenMenu>((set) => ({
  open: false,
  setIsOpenMenu: (value) => set({ open: value }),
  rotateHamburger: false,
  setRotateHamburger: (value) => set({ rotateHamburger: value }),
}));

export default useStore;
