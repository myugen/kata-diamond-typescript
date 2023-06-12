export const alphabet = ["A", "B", "C", "D", "E", "F", "G"] as const
export type AlphabetLetter = (typeof alphabet)[number]
