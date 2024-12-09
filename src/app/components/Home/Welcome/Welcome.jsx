import Image from "next/image"
import Button from "../../shared/Button";
import { playfair_display } from "@/app/ui/fonts";
import { StarIcon } from "@/app/ui/icons";

export default function Welcome() {
  return (
    <section className="bg-white w-screen h-[670px] p-8 flex">
      <div className="flex flex-col gap-4 w-1/3 p-8 pb-16">
        <div
          className={`${playfair_display.className} rounded-xl border-2 border-primary flex flex-col text-primary items-center justify-between h-1/2`}
        >
          <span className="text-[120px] leading-tight">30</span>
          <span className="text-3xl flex items-center font-semibold italic">
            <StarIcon className="text-sm" />
            <StarIcon className="text-2xl mr-2" /> years <StarIcon className="text-2xl ml-2" />
            <StarIcon className="text-sm" />
          </span>
          <div className="w-full rounded-b bg-primary text-center p-1 justify-self-end">
            <span className="text-white text-4xl text-center">
              OF EXPERIENCE
            </span>
          </div>
        </div>
        <div className="relative w-full h-1/2">
          <Image
            src="/welcome.jpg"
            className="rounded-xl object-cover object-center"
            fill
            alt="Construction worker using bricks"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 w-2/3 p-12">
        <h2 className={`${playfair_display.className} font-semibold text-6xl text-primary`}>
          Welcome to <br /> Vintage Outdoor Inc.
        </h2>
        <p>
          At Vintage Outdoor Inc., we are passionate about transforming your
          outdoor spaces into breathtaking landscapes that enhance your
          lifestyle.
        </p>
        <p>
          With years of expertise in custom design, installation, and
          maintenance, our goal is to bring your vision to life, whether you&apos;re
          dreaming of a serene garden, a luxurious outdoor living space, or a
          vibrant and functional yard.
        </p>
        <p>
          But we don&apos;t just stop at the outdoors. We&apos;re excited to introduce
          Vintage Construction Inc., a new division of our company specializing
          in high-quality construction services. From new home builds to
          remodels, ADUs, and commercial projects, Vintage Construction Inc. is
          here to make your construction dreams a reality.
        </p>
        <Button text="Read More" className="mt-16 px-7 rounded-3xl" />
      </div>
    </section>
  );
}
