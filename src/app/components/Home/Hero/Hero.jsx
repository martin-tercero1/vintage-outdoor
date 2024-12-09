import Button from "../../shared/Button";
import { playfair_display } from "@/app/ui/fonts";

export default function Hero() {
  return (
    <main className="w-screen bg-center bg-cover bg-opacity-35 h-[600px] bg-hero-image bg-black bg-blend-multiply relative text-white px-20 py-10">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4">
          <h1 className={`${playfair_display.className} text-6xl`}>
            TRANSFORMING SPACES, <br /> BUILDING DREAMS
          </h1>
          <p className="font-light text-xl">
            Landscaping <span className="font-bold">|</span> Outdoor Living{" "}
            <span className="font-bold">|</span> Construction Services
          </p>
          <div className="flex gap-3">
            <Button
              text="Explore our services"
              variant="primary"
              className="px-5 py-2 text-lg rounded-3xl"
            />
            <Button
              text="View our work"
              variant="secondary"
              className="px-5 py-2 text-lg rounded-3xl"
            />
          </div>
        </div>

        <p
          className={`${playfair_display.className} text-2xl italic self-end justify-self-end`}
        >
          From Vision to Reality,
          <br /> Inside and Out
        </p>
      </div>
    </main>
  );
}
