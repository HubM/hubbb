import { Frank_Ruhl_Libre, Lato } from "next/font/google";

export const fontBody = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const fontTitle = Frank_Ruhl_Libre({ subsets: ["latin"] });