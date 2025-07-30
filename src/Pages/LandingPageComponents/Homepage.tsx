import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Layout from "../Components/Layout";
function Homepage() {
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
  );
}

export default Homepage;
