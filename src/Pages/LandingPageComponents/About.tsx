import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function About() {
  return (
    <section className="bg-[#1e1e24] text-gray-200 py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-purple-300">
          About Me
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-400 mb-6">
          I'm a full-stack developer and former product manager with a proven
          track record of building intuitive, scalable digital products.
          Experienced in both coding and leading product initiatives, I
          specialize in creating seamless user experiences backed by strong
          technical foundations.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-400 mb-8">
          From ideation and roadmap planning to design and deployment, I bring a
          holistic approach that bridges tech and business. Let’s build
          impactful products together.
        </p>
        <Button className="bg-purple-500 text-white px-6 hover:bg-purple-600">
          View My Projects <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
export default About;
