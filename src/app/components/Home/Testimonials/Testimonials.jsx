import Image from "next/image";
import Button from "../../shared/Button";
import TitleSection from "../../shared/TitleSection";
import { testimonials } from "@/app/lib/placeholder-data";
import { PlayIcon, StarIcon } from "@/app/ui/icons";

export default function Testimonials() {
  return (
    <div className="w-screen h-[670px] bg-gray flex flex-col">
      <TitleSection
        title="Testimonials"
        subtitle="Don&apos;t just take our word for it—hear from our satisfied clients! We take pride in the strong relationships
      we&apos;ve built with our clients, and their feedback speaks to our commitment to excellence."
        className="max-w-[950px] mx-auto"
      />

      <div className="flex justify-center gap-1">
        {testimonials.map((testimonial, index) => (
          <article
            key={index}
            className="relative w-[310px] h-[290px] bg-white rounded-xl p-6 flex items-center gap-4 shadow-lg mx-24"
          >
            <div className="flex gap-3 flex-col max-w-[150px]">
              <span className="text-2xl font-medium">{testimonial.name}</span>
              <p className="text-[12px]">{testimonial.opinion}</p>
              <div className="flex gap-2">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <StarIcon className="text-secondary" />
                ))}
              </div>
            </div>
            <div className="absolute right-0 translate-x-[55%] w-64 h-48 flex items-center justify-center">
              <Image
                src={testimonial.srcAvatar}
                className="rounded-lg object-center object-cover"
                fill
                alt="Testimonial avatar"
              />
              <button className="flex items-center justify-center opacity-60 bg-secondary w-16 h-16 rounded-full">
                <PlayIcon className="text-white text-4xl" />
              </button>
            </div>
          </article>
        ))}
      </div>
      <Button
        text="Explore More Testimonials"
        variant="primary"
        className="my-10 text-xl px-5 self-center"
      />
    </div>
  );
}
