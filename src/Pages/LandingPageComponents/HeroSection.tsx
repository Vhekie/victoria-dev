import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Layout from "../Components/Layout";
function HeroSection() {
  return (
    <section className="h-screen bg-gray-800 p-6 ">
      <Layout />
      <div className="border rounded-lg  ">
        <div className="text-center mx-4 m-auto py-16 md:py-40 ">
          <p className="mb-4 text-purple-50 text-sm tracking-widest uppercase">
            Hi, I'm Victoria Ajibade
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-purple-200">
            Building digital products from design to code.
          </h1>
          <h2 className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-4 ">
            I'm a full-stack developer focused on creating intuitive, scalable,
            and beautiful web apps.
          </h2>
          <Button className="bg-purple-500 text-purple-100 text-sm  px-8">
            Get in touch <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
    // <div className="min-h-screen bg-[#0e0e10] text-gray-100 px-6 py-20">
    //   <div className="max-w-6xl mx-auto text-center space-y-8">
    //     <p className="text-purple-400 text-sm tracking-widest uppercase">
    //       Hi, I'm Victoria Ajibade
    //     </p>
    //     <h1 className="text-4xl md:text-6xl font-bold leading-tight text-purple-200">
    //       Building digital products from design to code.
    //     </h1>
    //     <h2 className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
    //       I'm a full-stack developer focused on creating intuitive, scalable,
    //       and beautiful web apps.
    //     </h2>
    //     {/* <h2 className="md:text-xl md:w-[70%] m-auto text-center  text-purple-50 mb-8">
    // //         I'm a software developer specializing in front-end and back-end
    // //         development and a passion for creating intuitive, user-centered
    // //         UI/UX designs.
    // //       </h2> */}
    //     <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-sm">
    //       Get in touch <ArrowRight className="ml-2 w-4 h-4" />
    //     </Button>
    //   </div>
    // </div>
  );
}

export default HeroSection;
