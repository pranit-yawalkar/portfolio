import { ReactElement } from "react";
import { FaAngular, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import {
  BiLogoSpringBoot,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";

interface SkillItem {
  icon: ReactElement;
  name: string;
}
const Skills = () => {
  const skills: SkillItem[] = [
    {
      icon: <FaReact color="#61DBFB" size={100} />,
      name: "React",
    },
    {
      icon: <TbBrandReactNative color="#61DBFB" size={100} />,
      name: "React Native",
    },
    {
      icon: <FaAngular color="#c3002f" size={100} />,
      name: "Angular",
    },
    {
      icon: <FaNodeJs color="#215732" size={100} />,
      name: "Nodejs",
    },
    {
      icon: <BiLogoSpringBoot color="#c6d7b9" size={100} />,
      name: "Spring Boot",
    },
    {
      icon: <BiLogoTypescript color="#007ACC" size={100} />,
      name: "TypeScript",
    },
    {
      icon: <BiLogoTailwindCss color="#38B2AC" size={100} />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaPython color="#336699" size={100} />,
      name: "Python",
    },
  ];

  return (
    <div id="skills" className="max-w-[1200px] px-5 py-8 mx-auto scroll-mt-32">
      <h2 className="font-bolsomiq text-5xl text-center font-semibold dark:text-white">
        Skills
      </h2>
      <div className="dark:text-white my-14 md:my-20">
        <Marquee speed={100}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 items-center mx-5 md:mx-14"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
