import { create } from "zustand";

export const useDarkModeStore = create((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  falseMode: () => set((state) => ({ darkMode: (state.darkMode = true) })),
  trueMode: () => set((state) => ({ darkMode: true })),
}));

export const useLoadingStore = create((set) => ({
  loading: true,

  falseLoading: () => set((state) => ({ loading: false })),
}));
