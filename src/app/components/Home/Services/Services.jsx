import Image from "next/image";
import TitleSection from "../../shared/TitleSection";
import { services } from "../../../lib/placeholder-data";

export default function Services() {
  return (
    <section className="h-[820px] bg-gray px-14 py-3 w-screen flex flex-col items-center">
      <TitleSection
        title="Our Services"
        subtitle="Comprehensive solutions for your outdoor and construction needs."
      />
      <div className="flex gap-20 justify-center mt-10">
        {services.map((service, index) => (
          <article
            key={index}
            className="p-4 w-[290px] h-[500px] rounded-3xl shadow-xl bg-white flex flex-col gap-4"
          >
            <div className="relative w-full h-[41%]">
              <Image
                src={service.srcImage}
                alt={service.name}
                fill
                className="rounded-t-xl object-cover object-center"
              />
            </div>
            <span className="text-2xl text-secondary">{service.name}</span>
            <p className="text-[11px] grow">{service.description}</p>
            <button className="flex justify-between items-center rounded-3xl text-left shadow-xl  drop-shadow-xl bg-gray/40 px-3 py-2">
              Read More
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                {service.icon}
              </div>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
