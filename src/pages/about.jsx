import React from "react";
import { Card, CardBody, Avatar } from "@heroui/react";
import { CodeBracketIcon, SparklesIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

const About = () => {
  return (
    <section className="min-h-screen  from-blue-50 to-blue-200 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">About Me</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          I’m <span className="font-semibold text-blue-600">Umar Farooq</span>, a passionate
          <b> Web Developer</b> specializing in modern technologies like React, TypeScript, and Express.js.
          My goal is to craft digital experiences that are fast, elegant, and user-friendly.
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-8">
          <Card className="w-full md:w-1/3 shadow-xl hover:shadow-2xl transition">
            <CardBody className="text-center">
              <CodeBracketIcon className="w-10 h-10 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-xl mb-2">Frontend Developer</h3>
              <p className="text-gray-600">
                Skilled in React.js, TypeScript, TailwindCSS & responsive UI/UX.
              </p>
            </CardBody>
          </Card>

          <Card className="w-full md:w-1/3 shadow-xl hover:shadow-2xl transition">
            <CardBody className="text-center">
              <RocketLaunchIcon className="w-10 h-10 text-purple-500 mx-auto mb-3" />
              <h3 className="font-semibold text-xl mb-2">Backend Learner</h3>
              <p className="text-gray-600">
                Learning Node.js & Express.js to build full-stack applications.
              </p>
            </CardBody>
          </Card>

          <Card className="w-full md:w-1/3 shadow-xl hover:shadow-2xl transition">
            <CardBody className="text-center">
              <SparklesIcon className="w-10 h-10 text-pink-500 mx-auto mb-3" />
              <h3 className="font-semibold text-xl mb-2">Problem Solver</h3>
              <p className="text-gray-600">
                Love solving challenges in logic, data structures, and algorithms.
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="mt-16">
          <Avatar
            src="https://i.pravatar.cc/150?img=3"
            className="mx-auto w-32 h-32 border-4 border-blue-500 shadow-lg"
          />
          <p className="mt-4 text-gray-700 text-lg">
            “Every line of code is a step toward innovation.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
