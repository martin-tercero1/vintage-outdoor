import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative w-[180px] h-[110px]">
      <Image
        src="/logo.png"
        fill
        className="object-cover object-center"
        alt="Logo Vintage Outdoor"
      />
    </div>
  );
}
