import { Printer } from "./printer.js"
import { alphabet, AlphabetLetter } from "./alphabet.js"

export class DiamondKata {
  constructor(private printer: Printer) {}

  render(shape: AlphabetLetter) {
    let currentPosition = alphabet.indexOf(shape)
    const totalOfColumns = 2 * currentPosition + 1

    const matrix: Array<Array<string>> = []

    for (let row = 0; row <= currentPosition; row++) {
      const currentLetter = alphabet[row]
      const level = this.createTemplateFor(totalOfColumns)
      const first = currentPosition - row
      const last = currentPosition + row
      level[first] = currentLetter
      level[last] = currentLetter
      matrix.push(level)
    }
    const upperLevel = [...matrix]
    const lowerLevel = [...matrix.reverse().splice(1)]
    const diamond = [...upperLevel, ...lowerLevel]

    this.printer.print(diamond.map((f) => f.join("")).join("\n"))
  }

  private createTemplateFor(index: number): Array<string> {
    const template: Array<string> = []
    for (let i = 0; i < index; i++) {
      template.push(" ")
    }
    return template
  }
}
