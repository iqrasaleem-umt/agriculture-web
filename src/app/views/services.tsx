import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <>
      {/* Main Heading */}
      <div className="mt-12 text-center">
        <p className="font-semibold text-xl text-green-700">Services</p>
        <h1 className="font-bold text-2xl text-gray-600 mt-6">
          Provide Fresh Food Every Single Day
        </h1>
      </div>

      {/* Services Grid */}
      <div className="mt-12 grid grid-cols-4 gap-6">
        {/* Service Item 1 */}
        <div className="bg-white p-4 border">
          <div className="flex justify-end text-gray-600">
            <p>01</p>
          </div>
          <Image
            className=""
            src={"/plantimage.png"}
            alt="image"
            width={80}
            height={80}
          />
          <h1 className="text-green-700 mt-2">Planting</h1>
          <p className="text-green-700 mt-2">
            Gravida sodales condimentum pellentesque accumsan orci quam
            sagittis sapien.
          </p>
        </div>

        {/* Service Item 2 (Add More Items if Needed) */}
        <div className="bg-white p-4 border">
          <div className="flex justify-end text-gray-600">
            <p>02</p>
          </div>
          <Image
            className=""
            src={"/plantimage.png"}
            alt="image"
            width={80}
            height={80}
          />
          <h1 className="text-green-700 mt-2">Mulching</h1>
          <p className="text-green-700 mt-2">
            Gravida sodales condimentum pellentesque accumsan orci quam
            sagittis sapien.
          </p>
        </div>
        <div className="bg-white p-4 border">
          <div className="flex justify-end text-gray-600">
            <p>03</p>
          </div>
          <Image
            className=""
            src={"/plantimage.png"}
            alt="image"
            width={80}
            height={80}
          />
          <h1 className="text-green-700 mt-2">Plowing</h1>
          <p className="text-green-700 mt-2">
            Gravida sodales condimentum pellentesque accumsan orci quam
            sagittis sapien.
          </p>
        </div>
        <div className="bg-white p-4 border">
          <div className="flex justify-end text-gray-600">
            <p>04</p>
          </div>
          <Image
            className=""
            src={"/plantimage.png"}
            alt="image"
            width={80}
            height={80}
          />
          <h1 className="text-green-700 mt-2">Mowing</h1>
          <p className="text-green-700 mt-2">
            Gravida sodales condimentum pellentesque accumsan orci quam
            sagittis sapien.
          </p>
        </div>
        <div className="bg-white p-4 border">
          <div className="flex justify-end text-gray-600">
            <p>05</p>
          </div>
          <Image
            className=""
            src={"/plantimage.png"}
            alt="image"
            width={80}
            height={80}
          />
          <h1 className="text-green-700 mt-2">Seeding</h1>
          <p className="text-green-700 mt-2">
            Gravida sodales condimentum pellentesque accumsan orci quam
            sagittis sapien.
          </p>
        </div>
        <div className="bg-white p-4 border">
          <div className="flex justify-end text-gray-600">
            <p>06</p>
          </div>
          <Image
            className=""
            src={"/plantimage.png"}
            alt="image"
            width={80}
            height={80}
          />
          <h1 className="text-green-700 mt-2">Fresh Vegetable</h1>
          <p className="text-green-700 mt-2">
            Gravida sodales condimentum pellentesque accumsan orci quam
            sagittis sapien.
          </p>
        </div>
        <div className="bg-white p-4 border">
          <div className="flex justify-end text-gray-600">
            <p>07</p>
          </div>
          <Image
            className=""
            src={"/plantimage.png"}
            alt="image"
            width={80}
            height={80}
          />
          <h1 className="text-green-700 mt-2">Watering</h1>
          <p className="text-green-700 mt-2">
            Gravida sodales condimentum pellentesque accumsan orci quam
            sagittis sapien.
          </p>
        </div>
        <div className="bg-white p-4 border">
          <div className="flex justify-end text-gray-600">
            <p>08</p>
          </div>
          <Image
            className=""
            src={"/plantimage.png"}
            alt="image"
            width={80}
            height={80}
          />
          <h1 className="text-green-700 mt-2">VegetableSelling</h1>
          <p className="text-green-700 mt-2">
            Gravida sodales condimentum pellentesque accumsan orci quam
            sagittis sapien.
          </p>
        </div>
      </div>
    </>
  );
}

