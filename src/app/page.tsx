"use client";

import { useState } from "react";

export default function Home() {
  const [bannerBg, setBannerBg] = useState("bg-blue-500");

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBannerBg(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Full width Banner */}
      <section className={`w-full py-16 text-white text-center ${bannerBg}`}>
        <h1 className="text-4xl font-bold">Things I Enjoy</h1>
        <p className="mt-4 text-lg">
          I love tennis a lot. I think about it most of the time. I also enjoy watching anime, and creating art through photography. You can see my art on <a href="https://www.instagram.com/g.v.utong" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">Instagram</a>.
        </p>
      </section>

      {/* Form to Change Banner Background */}
      <section className="p-6 max-w-md mx-auto">
        <form className="flex flex-col gap-4">
          <label htmlFor="color" className="font-medium">
            Change Banner Background:
          </label>
          <select
            id="color"
            onChange={handleColorChange}
            className="p-2 border rounded"
          >
            <option value="bg-blue-500">Blue</option>
            <option value="bg-green-500">Green</option>
            <option value="bg-purple-500">Purple</option>
          </select>
        </form>
      </section>
    </div>
  );
}