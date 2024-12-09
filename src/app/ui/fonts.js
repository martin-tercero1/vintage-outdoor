import {
  Montserrat, // Main Font - Paragraphs
  Libre_Baskerville, // Headings
  Nunito, // Buttons
  Playfair_Display, // Italics texts
  // Open_Sans, // optional - Forms, others...
} from "next/font/google";

export const montserrat = Montserrat({ subsets: ["latin"],  });
export const playfair_display = Playfair_Display({ subsets: ["latin"] });
// export const open_sans = Open_Sans({ subsets: ["latin"] });
export const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const nunito = Nunito({ subsets: ["latin"], weight: ["300", "400", "500"] });
