import React from "react";
import Image from "next/image";

export default function Choose() {
  return (
    <div>
      {/* First Section */}
      <div className="bg-green-800 w-full h-[600px] mt-32 relative">
        {/* Container for Image and Text */}
        <div className="flex justify-between px-4 h-full">
          {/* Image Positioned Slightly Above the Background */}
          <div className="absolute -top-20 left-0">
            <Image
              src="/agriculturegirl.jpg"
              alt="Agriculture Girl"
              height={200}
              width={400}
            />
          </div>

          {/* Text Content */}
          <div className="text-white max-w-lg ml-auto mt-16">
            <h1 className="text-3xl mb-4">Why Choose Us</h1>
            <h2 className="font-semibold text-xl mb-4">
              More than 50 years of experience in the agriculture industry
            </h2>
            <p>
              Reprehenderit, odio laboriosam? Blanditiis quae ullam quasi illum
              minima nostrum perspiciatis error consequatur sit nulla.
            </p>
            <div className="mt-6">
              <p>Plants need rain</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="mt-6">
              <p>Love organic foods</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="mt-6">
              <p>Sell vegies</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-white w-full min-h-[600px] relative">
        {/* Container for Text and Image */}
        <div className="flex justify-between px-4 h-full items-center">
          {/* Text Content on Left */}
          <div className="text-black max-w-lg mr-auto">
            
            <h2 className="font-semibold text-xl mb-4 text-green-700">
            Plants Make Life Better
            </h2>
            <p className="text-gray-600">
            Plants make life better by purifying the air, reducing stress, and enhancing
            overall well-being. They provide oxygen, beautify spaces, 
            and create a calming environment, promoting a healthier and more
            sustainable way of living. From boosting mental health to supporting ecosystems,
            plants are vital for a balanced and thriving world.
            </p>
            <div className="mt-6  flex">
            <Image src={"/tick.png"} alt="image" width={10} height={10}/>
              <p className="text-gray-600">Plants need rain</p>
              
            </div>
            <div className="mt-6 flex">
            <Image src={"/tick.png"} alt="image" width={10} height={10}/>
              <p className="text-gray-600">Love organic foods</p>
             
            </div>
            <div className="mt-6 flex">
            <Image src={"/tick.png"} alt="image" width={10} height={10}/>
              <p className="text-gray-600">Sell vegies</p>
              
            </div>
            <button className="px-6 py-4 rounded-sm text-white bg-green-700 mt-4">Get In Touch</button>
          </div>

          {/* Image on Right */}
          <div className="mt-18">
            <Image
              src="/agriculturegirl2.jpg"
              alt="Agriculture Girl"
              height={100}
              width={400}
            />
          </div>
         
        </div>
      </div>
    </div>
  );
}
