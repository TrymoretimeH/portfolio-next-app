import Image from "next/image";
import React from "react";
import aboutImg from "../public/assets/about.jpg"


const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="uppercase py-4 text-[#5651e5] text-xl tracking-widest">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">{"//"} I am a web developer</p>
          <p className="py-2 text-gray-600">
            I have spent 2 years to learn about JavaScript to understand
            overview what developer to be
          </p>
          <p className="py-2 text-gray-600">
            Finally, I become a developer with full-stack engine
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out my CV to know
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 select-none">
          <Image
            className="rounded-xl"
            src={aboutImg}
            alt="/"
            width={640}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
