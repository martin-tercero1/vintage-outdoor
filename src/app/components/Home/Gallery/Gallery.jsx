import { libre_baskerville } from "@/app/ui/fonts";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="w-screen h-[700px] bg-gallery-image bg-center bg-no-repeat bg-cover relative px-24 py-32">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex gap-8">
        <div className="flex flex-col gap-4 w-[40%] text-white">
          <div className="relative w-36 h-24">
            <Image
              src="/logo.png"
              alt="Logo Outdoor Vintage"
              fill
              className="object-center object-cover"
            ></Image>
          </div>
          <h4 className={`${libre_baskerville.className} text-5xl font-medium`}>
            Explore <br /> Our Gallery
          </h4>
          <hr className="w-[200px] text-primary" />
          <p>
            Take a look at our recent projects to see the quality and creativity
            we bring to every job. Whether it&apos;s a beautifully landscaped garden
            or a newly built home, our portfolio showcases the best of what
            Vintage Outdoor Inc. and Vintage Construction Inc. can offer.
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-[240px_1fr] w-[60%] h-[450px] bg-transparent gap-3">
          <div className="relative w-full h-full">
            <Image
              src="/gallery-2.jpg"
              alt="Gallery 1 image"
              fill
              className="rounded-xl object-cover object-center"
            ></Image>
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/gallery-4.jpg"
              alt="Gallery 1 image"
              fill
              className="rounded-xl object-cover object-center"
            ></Image>
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/gallery-3.jpg"
              alt="Gallery 1 image"
              fill
              className="rounded-xl object-cover object-center"
            ></Image>
          </div>
          <div className="flex col-span-full gap-3">
            <div className="relative w-[450px]">
              <Image
                src="/gallery-1.jpg"
                alt="Gallery 1 image"
                fill
                className="rounded-xl object-cover object-center"
              ></Image>
            </div>
            <div className="relative w-full col-span-2">
              <div className="absolute z-20 rounded-xl inset-0 bg-white opacity-60"></div>
              <div className="relative z-30 flex flex-col items-center justify-center w-full h-full">
                <a className="text-black text-xl font-semibold" href="#">
                  View our work
                </a>
                <div className="w-[80px] border-b-primary border-b-2"></div>
              </div>
              <Image
                src="/gallery-5.jpg"
                alt="Gallery 1 image"
                fill
                className="rounded-xl object-cover object-center"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
