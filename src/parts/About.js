import { h } from "preact";

function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <p className="text-2xl md:text-4xl font-medium text-center">
        About Me
      </p>
      <p className="text-base text-left md:text-center text-gray-600 leading-relaxed mt-4">
        Hi! My name is Jimmy Wang and I love to program and tinker with hardware.
        I just graduated Elgin Park Secondary and will be studying software engineering at
        Fudan University in Shanghai.
      </p>
    </div>
  );
}

export default About;