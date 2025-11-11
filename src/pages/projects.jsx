import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@heroui/react";
import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";

const Projects = () => {
  const projects = [
    {
      name: "Portfolio Website",
      tech: "React, TailwindCSS, HeroUI",
      desc: "A sleek and fully responsive portfolio website showcasing my skills and work.",
      link: "#",
    },
    {
      name: "E-Commerce App",
      tech: "React, Express, MongoDB",
      desc: "A powerful app to manage tasks, with CRUD operations and secure login system.",
      link: "https://ecommerce-web-frontend-8gx8.vercel.app",
    },
    {
      name: "Weather Forecast App",
      tech: "TypeScript, API Integration",
      desc: "Real-time weather forecasting app fetching live data from OpenWeather API.",
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen  from-blue-100 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">My Projects</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Card
              key={i}
              className="shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 bg-white"
            >
              <CardHeader className="flex items-center justify-center">
                <CodeBracketSquareIcon className="w-12 h-12 text-blue-600" />
              </CardHeader>
              <CardBody>
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">{p.name}</h2>
                <p className="text-gray-600 mb-3">{p.desc}</p>
                <p className="text-sm text-gray-500">Tech Stack: {p.tech}</p>
              </CardBody>
              <CardFooter className="flex justify-center">
                <Button
                  color="primary"
                  variant="shadow"
                  as="a"
                  href={p.link}
                  target="_blank"
                >
                  View Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
