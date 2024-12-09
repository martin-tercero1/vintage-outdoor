import Image from "next/image";
import Button from "../../shared/Button";
import { LocationIcon, PhoneIcon } from "@/app/ui/icons";
import { libre_baskerville } from "@/app/ui/fonts";

export default function Contact() {
  return (
    <>
      <div className="w-screen bg-contact-image bg-no-repeat bg-cover bg-center relative flex justify-center p-10 h-[270px]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-evenly">
          <div className="relative w-[180px] h-[110px]">
            <Image
              src="/logo.png"
              fill
              className="object-cover object-center"
              alt="Logo Vintage Outdoor"
            />
          </div>
          <span
            className={`${libre_baskerville.className} text-7xl text-white`}
          >
            Contact Us
          </span>
        </div>
      </div>
      <div className="w-screen h-[750px] bg-gray p-20 pb-40 flex ">
        <div className="flex flex-col gap-4 w-1/2 px-20">
          <h6
            className={`${libre_baskerville.className} text-5xl leading-tight`}
          >
            Ready to <br /> <span className="text-secondary">Get Started?</span>
          </h6>
          <p>
            Whether you&apos;re planning a stunning outdoor retreat, or a major
            construction project, Vintage Outdoor Inc. and Vintage Construction
            Inc. are here to help.
          </p>
          <p>
            Get in touch with us today to discuss your project, request a quote,
            or schedule a consultation.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex gap-2 items-center mt-5">
              <div className="flex items-center justify-center bg-secondary w-10 h-10 rounded-full">
                <PhoneIcon className="text-white" />
              </div>
              <span className="text-2xl font-medium">760 350 5552</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex items-center justify-center bg-secondary w-10 h-10 rounded-full">
                <LocationIcon className="text-white" />
              </div>
              <span className="text-2xl font-medium">Coachella Valley, CA</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 rounded-3xl bg-white w-1/2 drop-shadow-xl p-14 mx-16">
          <span className="text-4xl font-bold">Send a Message</span>
          <input
            type="text"
            placeholder="Name"
            className="w-full border-b-[1px] text-xl text-black placeholder:text-black outline-none pb-2"
          />
          <input
            type="text"
            placeholder="E-mail address"
            className="w-full border-b-[1px] text-xl text-black placeholder:text-black outline-none pb-2"
          />
          <input
            type="text"
            placeholder="Message"
            className="w-full border-b-[1px] text-xl text-black placeholder:text-black outline-none pb-2"
          />
          <Button
            text="Submit"
            variant="primary"
            className="px-9 text-3xl rounded-full self-end mt-5"
          />
        </div>
      </div>
    </>
  );
}
