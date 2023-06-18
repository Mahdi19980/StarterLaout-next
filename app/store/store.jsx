import { create } from "zustand";

export const useToggleDropDown = create((set) => ({
  toggles: false,
  toggleDropDown: () => set((state) => ({ toggle: !state.toggle })),
}));
