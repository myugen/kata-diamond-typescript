import { describe, expect, it, vi } from "vitest"
import { Printer } from "./printer.js"
import { DiamondKata } from "./diamond-kata.js"
import { AlphabetLetter } from "./alphabet.js"

type TestCase = { shape: AlphabetLetter; expected: string }

class MockPrinter implements Printer {
  print = vi.fn()
}
describe("DiamondKata", () => {
  it.each<TestCase>([
    { shape: "A", expected: "A" },
    { shape: "C", expected: "  A  \n B B \nC   C\n B B \n  A  " },
  ])("should print a $shape shaped diamond", ({ expected, shape }) => {
    const printer = new MockPrinter()
    const diamondKata = new DiamondKata(printer)

    diamondKata.render(shape)

    expect(printer.print).toHaveBeenCalledWith(expected)
  })
})
