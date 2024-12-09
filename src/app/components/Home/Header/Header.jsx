import Image from "next/image";
import NavLink from "./NavLink";
import Button from "../../shared/Button";
import { nunito } from "@/app/ui/fonts";

export default function Header() {
  return (
    <header className="w-screen flex bg-stone-400 items-center justify-around py-3 px-14">
      <div className="relative w-[180px] h-[110px]">
        <Image
          src="/logo.png"
          className="object-center object-cover"
          fill
          alt="Logo"
        />
      </div>
      <nav>
        <ul className={`flex wrap gap-6 ${nunito.className}`}>
          <NavLink href="/#home" text="Home" />
          <NavLink href="/#about-us" text="About Us" />
          <NavLink href="/#services" text="Services" />
          <NavLink href="/#gallery" text="Gallery" />
          <NavLink href="/#testimonials" text="Testimonials" />
          <NavLink href="/#blog" text="Blog" />
          <NavLink href="/#faq" text="FAQs" />
        </ul>
      </nav>

      <Button text="Contact Us" />
    </header>
  );
}
