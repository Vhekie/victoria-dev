import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { TbBulb } from "react-icons/tb";

function Skills() {
  return (
    <div className="bg-slate-800 text-white py-16 px-6">
      <div className="text-center mb-12">
        <h4 className="text-lg uppercase tracking-widest text-gray-400">
          Skills
        </h4>
        <h1 className="text-4xl font-bold">My Toolbox</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Languages */}
        <div className="bg-slate-700 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">Languages</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <FaJs className="text-yellow-400" />
              <span>JavaScript</span>
            </div>
            <div className="flex items-center gap-3">
              <FaHtml5 className="text-orange-500" />
              <span>HTML</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCss3Alt className="text-blue-400" />
              <span>CSS</span>
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <div className="bg-slate-700 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">Frameworks & Libraries</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <FaReact className="text-cyan-400" />
              <span>React</span>
            </div>
            <div className="flex items-center gap-3">
              <SiTypescript className="text-blue-500" />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-3">
              <SiExpress className="text-gray-300" />
              <span>Express</span>
            </div>
            <div className="flex items-center gap-3">
              <SiTailwindcss className="text-teal-400" />
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="bg-slate-700 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">Databases</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <SiMysql className="text-yellow-200" />
              <span>MySQL</span>
            </div>
            <div className="flex items-center gap-3">
              <SiMongodb className="text-green-500" />
              <span>MongoDB</span>
            </div>
            {/* <div className="flex items-center gap-3">
              <SiSeo className="text-pink-400" />
              <span>SEO</span>
            </div> */}
          </div>
        </div>

        {/* Knowledge */}
        <div className="bg-slate-700 p-6 rounded-xl shadow hover:shadow-lg transition md:col-span-3">
          <h2 className="text-xl font-semibold mb-4">Knowledge</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <TbBulb className="text-yellow-300" />
              <span>Leadership</span>
            </div>
            <div className="flex items-center gap-2">
              <TbBulb className="text-yellow-300" />
              <span>Agile & Scrum</span>
            </div>
            <div className="flex items-center gap-2">
              <TbBulb className="text-yellow-300" />
              <span>SEO</span>
            </div>
            <div className="flex items-center gap-2">
              <TbBulb className="text-yellow-300" />
              <span>Usability</span>
            </div>
            <div className="flex items-center gap-2">
              <TbBulb className="text-yellow-300" />
              <span>Scalability</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
