import { montserrat } from "./ui/fonts";
import "./globals.css";

export const metadata = {
  title: "Outdoor Vintage",
  description: "Demo webpage for ISNING",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
