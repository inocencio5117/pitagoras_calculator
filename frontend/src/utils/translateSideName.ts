export function translateSideName(side: string | undefined | null) {
  switch (side) {
    case "sideA":
      return "Lado A";
    case "sideB":
      return "Lado B";
    case "hip":
      return "Hipotenusa";
    default:
      return undefined;
  }
}
