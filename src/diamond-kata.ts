import { Printer } from "./printer.js"
import { alphabet, AlphabetLetter } from "./alphabet.js"

export class DiamondKata {
  constructor(private printer: Printer) {}

  render(shape: AlphabetLetter) {
    let currentPositionLetterOfShape = alphabet.indexOf(shape)
    const columnSize = 2 * currentPositionLetterOfShape + 1
    const upperLevelDiamond = this.createUpperLevelDiamond(columnSize, currentPositionLetterOfShape)
    const lowerLevelDiamond = [...upperLevelDiamond].reverse().splice(1)

    const diamond = [...upperLevelDiamond, ...lowerLevelDiamond]

    this.printer.print(diamond.map((f) => f.join("")).join("\n"))
  }
  private createUpperLevelDiamond(columnSize: number, currentPositionLetterOfShape: number) {
    const createLevelFor = this.createLevelTemplateWith(columnSize)
    const lettersToPrint = alphabet.slice(0, currentPositionLetterOfShape + 1)

    return lettersToPrint.map((currentLetter, index) => {
      const first = currentPositionLetterOfShape - index
      const last = currentPositionLetterOfShape + index
      return createLevelFor(currentLetter, [first, last])
    })
  }

  private createLevelTemplateWith(columnSize: number) {
    const template = new Array<string>()
    for (let i = 0; i < columnSize; i++) {
      template.push(" ")
    }
    return (letterToPrint: AlphabetLetter, positions: [number, number]) => {
      const level = [...template]
      level[positions[0]] = letterToPrint
      level[positions[1]] = letterToPrint
      return level
    }
  }
}
