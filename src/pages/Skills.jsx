import React from 'react';
import { useInView } from 'react-intersection-observer';

// Icons
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiCsharp } from "react-icons/si";

const Skills = () => {
  const { ref, inView } = useInView();

  return (
    <article
      id="skills"
      ref={ref}
      className="mx-auto px-6 py-20"
    >
      <h1 className="text-[#cd51ff] text-center text-4xl font-semibold mb-10 drop-shadow-lg">
        Minhas Habilidades
      </h1>

      <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-12">
        <SkillIcon icon={<IoLogoHtml5 />} text="HTML5" color="#E34F26" />
        <SkillIcon icon={<IoLogoCss3 />} text="CSS3" color="#1572B6" />
        <SkillIcon icon={<IoLogoJavascript />} text="JavaScript" color="#F7DF1E" />
        <SkillIcon icon={<FaReact />} text="React" color="#61DAFB" />
        <SkillIcon icon={<SiTailwindcss />} text="Tailwind CSS" color="#38B2AC" />
        <SkillIcon icon={<SiCsharp />} text="Angular" color="#9B4F96" />
      </section>
    </article>
  );
};

const SkillIcon = ({ icon, text, color }) => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <div
      className="relative flex flex-col items-center cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        style={{ color }}
        className="bg-[#1e1e1e] rounded-xl p-3 shadow-lg text-6xl transition-transform duration-300 transform hover:scale-110"
      >
        {icon}
      </div>

      {isHover && (
        <span className="absolute -bottom-10 px-3 py-1 bg-[#cd51ff] text-white rounded-md text-sm font-semibold whitespace-nowrap drop-shadow-lg">
          {text}
        </span>
      )}
    </div>
  );
};

export default Skills;
