import { create } from "zustand";

export const useToggleDropDown = create((set) => ({
  toggle: false,
  toggleDropDown: () => set((state) => ({ toggle: !state.toggle })),
}));
