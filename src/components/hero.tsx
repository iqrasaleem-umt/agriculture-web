

import Image from "next/image";

export default function HeroSection() {
  return (
    <div>
      <div className="relative w-full h-[450px]"> {/* Wrapper div for controlling height */}
        <Image
          className="object-cover"   // Ensures the image covers the container without stretching
          src="/p1.jpg"
          alt="Image"
          layout="fill"  // Ensures the image fills the container
          objectFit="cover"  // Optional: provides better control over how the image behaves
        />
        <div  className="absolute inset-0 flex flex-col justify-center items-center transform transition-transform duration-500 hover:translate-x-10">
        <h1 className="text-white text-2xl font-bold">Farming is a Best Solution Of World Starvation</h1>
        <p className="text-white text-xl">Sow the seeds with care, and nature will do the rest </p>
        </div>
      </div>
    


    </div>
  );
}