import React from "react";

import "./Projects.css";

interface ProjectProps {
  title: string;
  desc: string;
  skills: string[];
}
const Project: React.FC<ProjectProps> = ({ title, desc, skills }) => {
  return (
    <div className="project">
      <p className="text-xl font-semibold text-center mb-10">{title}</p>

      <p className="text-center text-lg font-light mb-0 mt-auto">{desc}</p>

      <div className="flex flex-wrap flex-row justify-center items-center gap-x-6 gap-y-6 sm:gap-y-2 mt-12 mb-0">
        {skills.map((skill, index) => (
          <p key={index} className="text-center">
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "hack dearborn 3 app",
      desc: "Aenean per posuere mauris vivamus habitant lectus vestibulum scelerisque ullamcorper. Per id curabitur cursus cras quam eu vestibulum leo. At arcu egestas commodo litora vivamus commodo ultricies.",
      skills: ["React Native", "Typescript", "Storybook", "Supabase"],
    },
    {
      title: "international women's day summit website",
      desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Nulla quam quisque purus a aptent sit. At tortor habitant hac blandit quis. Duis iaculis sapien aenean lacinia fermentum euismod class cras.",
      skills: ["React.js", "Tailwind CSS", "Javascript"],
    },
    {
      title: "code conductor",
      desc: "Sollicitudin suscipit ipsum bibendum enim eget nunc neque duis. Quis nisl lectus mus turpis dui cubilia neque ultricies placerat. Finibus risus taciti, integer phasellus maecenas dictum quis fames.",
      skills: ["React.js", "Typescript", "Git / Github"],
    },
  ];

  return (
    <div className="projects">
      <p className="text-4xl text-center mb-20">
        here&apos;s what i&apos;ve done
      </p>

      <div className="flex flex-row flex-wrap justify-center sm:justify-start items-start p-4 gap-6">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
