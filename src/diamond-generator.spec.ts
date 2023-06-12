import { describe, expect, it, vi } from "vitest"
import { Printer } from "./printer.js"
import { DiamondKata } from "./diamond-kata.js"
import exp = require("constants")

class MockPrinter implements Printer {
  print = vi.fn()
}
describe("DiamondKata", () => {
  it("should print an A-shaped diamond", () => {
    const printer = new MockPrinter()
    const diamondKata = new DiamondKata(printer)

    diamondKata.render("A")

    expect(printer.print).toHaveBeenCalledWith("A")
  })

  it("should print an C-shaped diamond", () => {
    const printer = new MockPrinter()
    const diamondKata = new DiamondKata(printer)

    diamondKata.render("C")

    expect(printer.print).toHaveBeenCalledWith("  A  \n B B \nC   C\n B B \n  A  ")
  })
})
