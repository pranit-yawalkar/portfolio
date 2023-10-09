import React from "react";
import { FiMonitor } from "react-icons/fi";
import { BiServer } from "react-icons/bi";
import { BsFillCloudCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="bg-gray-200 dark:bg-[#232D3F] dark:text-white w-100 py-5">
      <div className="max-w-[1200px] px-5 py-5 mx-auto">
        <h3 className="font-bolsomiq text-5xl text-center font-semibold">
          What I do?
        </h3>
        <div className="flex gap-5 my-10">
          <div className="item">
            <div className="flex flex-col gap-3 items-center">
              <FiMonitor size={100} />
              <h3 className="font-bolsomiq text-2xl">Frontend</h3>
              <p className="text-center text-lg font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                placeat quisquam laborum. Nihil, nostrum minus.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="flex flex-col gap-3 items-center">
              <BiServer size={100} />
              <h3 className="font-bolsomiq text-2xl">Backend</h3>
              <p className="text-center text-lg font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                placeat quisquam laborum. Nihil, nostrum minus.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="flex flex-col gap-3 items-center">
              <BsFillCloudCheckFill size={100} />
              <h3 className="font-bolsomiq text-2xl">Deployment</h3>
              <p className="text-center text-lg font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                placeat quisquam laborum. Nihil, nostrum minus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
