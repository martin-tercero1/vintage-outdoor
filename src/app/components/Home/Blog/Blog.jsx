import Image from "next/image";
import Button from "../../shared/Button";
import TitleSection from "../../shared/TitleSection";
import { blogs } from "@/app/lib/placeholder-data";

export default function Blog() {
  return (
    <div className="w-screen h-[720px] p-10 flex flex-col items-center">
      <TitleSection
        title="Our Blog"
        subtitle="Whether you're looking for expert advice, project inspiration, or updates on our recent
work, you'll find it all here. Explore our articles to stay informed and inspired!"
        className="max-w-[800px]"
      />
      <div className="flex justify-around w-full h-[350px]">
        {blogs.map((blog, index) => (
          <>
            <div className="relative w-[300px] h-[200px]">
              <Image
                src={blog.srcImage}
                className="rounded-xl"
                fill
                alt={blog.title}
              />
              <div className="relative flex flex-col gap-2 top-[70%] right-[-14%] w-[230px] rounded-2xl p-5 shadow-lg bg-white">
                <p className="font-semibold">{blog.title}</p>
                <p className="text-sm">{blog.subtitle}</p>
                <Button
                  text="Read More"
                  className="self-center px-10 bg-gray/30 text-black/60 drop-shadow-xl shadow-xl"
                />
              </div>
            </div>
          </>
        ))}
      </div>
      <Button text="Discover More" className="text-xl px-10 rounded-full" />
    </div>
  );
}
