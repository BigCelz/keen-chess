import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useVulgarStore = create(
  persist(
    (set) => ({
      words: ["Fuck", "Ass", "Hacking", "drugs", "Kill", "Harm", "Destroy"],

      addWord: (word) =>
        set((state) => {
          const trimmed = word.trim();
          if (!trimmed) return state; // ignore empty
          if (state.words.includes(trimmed)) return state; // avoid duplicates
          return { words: [...state.words, trimmed] };
        }),

      removeWord: (word) =>
        set((state) => ({
          words: state.words.filter((w) => w !== word),
        })),
    }),
    {
      name: "vulgar-words-storage", // storage key
    }
  )
);



