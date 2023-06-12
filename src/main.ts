import { DiamondKata } from "./diamond-kata.js"
import { Printer } from "./printer.js"

class SystemPrinter implements Printer {
  print(input: string): void {
    console.log(input)
  }
}

const diamond = new DiamondKata(new SystemPrinter())

diamond.render("G")
