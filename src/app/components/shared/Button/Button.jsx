import { nunito } from "@/app/ui/fonts"
import { twMerge } from "tailwind-merge"

export default function Button({ text, variant, className }) {
  const baseClass = `${nunito.className} font-bold text-white bg-primary px-2 py-1 rounded-2xl w-fit`;

  const variants = {
    primary: "bg-secondary",
    secondary: "bg-white text-secondary",
  };
  
  const buttonClass = twMerge(baseClass, variants[variant], className )

  return (
    <button className={buttonClass}>{text}</button>
  )
}
