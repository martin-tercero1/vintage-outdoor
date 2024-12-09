import Heading from "./Heading"
import Logo from "../Logo"
import { twMerge } from "tailwind-merge";

export default function TitleSection({ title, subtitle, className }) {
  const baseClass =
    "flex flex-col gap-1 justify-center items-center text-center mb-5";

  const TitleSectionClass = twMerge(baseClass, className);

  return (
    <div className={TitleSectionClass}>
        <Logo/>
        <Heading>{title}</Heading>
        <p className="text-lg">{subtitle}</p>
    </div>
  )
}
