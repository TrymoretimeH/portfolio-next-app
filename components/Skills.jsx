import Image from "next/image";
import React from "react";
import htmlImg from "../public/assets/skills/html.png"
import cssImg from "../public/assets/skills/css.png"
import javascriptImg from "../public/assets/skills/javascript.png"
import reactImg from "../public/assets/skills/react.png"
import nodeImg from "../public/assets/skills/node.png"
import nextImg from "../public/assets/skills/nextjs.png"
import tailwindImg from "../public/assets/skills/tailwind.png"
import githubImg from "../public/assets/skills/github1.png"

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest  uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 select-none">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={htmlImg}
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 select-none">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={cssImg}
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 select-none">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={javascriptImg}
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 select-none">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={reactImg}
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 select-none">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={nodeImg}
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NodeJs</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 select-none">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={tailwindImg}
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 select-none">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={nextImg}
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJs</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 select-none">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={githubImg}
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
