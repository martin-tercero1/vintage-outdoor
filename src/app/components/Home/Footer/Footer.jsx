import Image from "next/image";
import Button from "../../shared/Button";
import { EnvelopeIcon, FacebookIcon, LinkedInIcon, LocationIcon, PhoneIcon, TwitterIcon, WhatsappIcon } from "@/app/ui/icons";

export default function Footer() {
  return (
    <footer className="w-screen bg-footer-image bg-center bg-cover relative h-[750px] mb-16 text-white">
      <div className="absolute w-full h-[85%] bg-black opacity-70"></div>
      <div className="relative z-10 grid grid-cols-[290px_1fr_160px_300px] gap-x-14 p-20 pr-28">
        <div className="flex flex-col items-center ">
          <div className="relative w-52 h-36">
            <Image
              src="/logo.png"
              fill
              className="object-cover object-center"
              alt="Logo Outdoor Vintage"
            />
          </div>
          <p className="text-justify">
            At Vintage Outdoor Inc, we are passionate about transforming your
            outdoor spaces into breathtaking landscapes that enhance your
            lifestyle.
          </p>
          <ul className="flex gap-5 mt-4">
            <li>
              <div className="flex items-center justify-center bg-primary w-10 h-10 rounded-full">
                <FacebookIcon className="text-black text-2xl"/>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center bg-primary w-10 h-10 rounded-full">
                <WhatsappIcon className="text-black text-2xl"/>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center bg-primary w-10 h-10 rounded-full">
                <LinkedInIcon className="text-black text-2xl"/>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center bg-primary w-10 h-10 rounded-full">
                <TwitterIcon className="text-black text-2xl"/>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col ml-16">
          <span className="font-bold text-lg">Our Company</span>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#vintage">Vintage Construction</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-bold text-lg">Support</span>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
            <li>
              <a href="#faq">FAQs</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <span className="font-bold text-lg">Join Our Newsletter</span>
            <div className="flex border-white rounded-3xl border p-[2px]">
              <input
                type="text"
                className="pl-2 outline-none bg-transparent grow-2"
                placeholder="Enter your email"
              />
              <Button text="Subscribe" className="rounded-3xl" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                <PhoneIcon className="text-black" />
              </div>
              <span>760 350 5552</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                <LocationIcon className="text-black" />
              </div>
              <span>Coachella Valley, CA</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                <EnvelopeIcon className="text-black" />
              </div>
              <span>office@vintageoutdoorinc.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
