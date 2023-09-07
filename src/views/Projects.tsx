import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, OpenIcon } from "../components/Icons";
import { projects } from "../data/projects";
import styles from "../badges.module.css";

const techToColor = {
  React: styles.bgBlue,
  Typescript: styles.bgIndigo,
  Vue: styles.bgGreen,
  Flask: styles.bgOrange,
  Jinja: styles.bgAmber,
  SQLAlchemy: styles.bgPink,
  Javascript: styles.bgYellow,
  Render: styles.bgEmerald,
  Redux: styles.bgPurple,
  HTML: styles.bgRed,
  SASS: styles.bgPink,
  CSS: styles.bgPurple,
  TailwindCSS: styles.bgSky,
  Python: styles.bgBlue,
  PostgreSQL: styles.bgIndigo,
  Firebase: styles.bgPink,
  "Material-UI": styles.bgViolet,
};

type BadgeProps = {
  tech: keyof typeof techToColor;
};

function Badge({ tech }: BadgeProps) {
  const colorClass = techToColor[tech];

  return (
    <span
      className={`${colorClass} mb-2 mr-2 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset`}
    >
      {tech}
    </span>
  );
}

type ProjectProps = {
  name: string;
  title: string;
  description: string;
  technologies: string[];
  screenshots: string[];
  github: string;
  site: string;
};
const projectsTyped: ProjectProps[] = projects;

function Project({
  name,
  title,
  description,
  technologies,
  screenshots,
  github,
  site,
}: ProjectProps) {
  const [currentScreenshot, setCurrentScreenshot] = useState(
    `/projects/${name}${screenshots[0]}`,
  );
  const [nextScreenshot, setNextScreenshot] = useState("");

  const handleScreenshotClick = () => {
    const currentImage = currentScreenshot.replace(`/projects/${name}`, "");
    const currentIndex = screenshots.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % screenshots.length;
    setNextScreenshot(`/projects/${name}${screenshots[nextIndex]}`);
    setCurrentScreenshot(`/projects/${name}${screenshots[nextIndex]}`);
  };

  return (
    <>
      <div data-aos="fade-left">
        <div className="flex items-end font-lato">
          <h2 className="whitespace-nowrap text-2xl">{title}</h2>
          <div className="flex w-full justify-end gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-center hover:animate-trance"
            >
              <Github />
            </a>
            <a
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-center hover:animate-trance"
            >
              <OpenIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="relative aspect-video w-[400px] overflow-hidden">
        <div data-aos="fade-up">
          <button
            onClick={handleScreenshotClick}
            className="z-50 p-0 transition-opacity duration-500 ease-in-out focus:outline-none"
          >
            <AnimatePresence
              onExitComplete={() => setCurrentScreenshot(nextScreenshot)}
            >
              <motion.div
                key={currentScreenshot}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layoutId={`projectImage-${name}`}
                className="absolute inset-0"
              >
                <img
                  src={currentScreenshot}
                  alt={name}
                  className="mx-auto cursor-pointer rounded-lg shadow-lg"
                />
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>
      <div data-aos="fade-left">
        {technologies.map((tech) => {
          if (Object.keys(techToColor).includes(tech)) {
            return <Badge key={tech} tech={tech as keyof typeof techToColor} />;
          }
          return null;
        })}
      </div>
      <p className="mb-8">{description}</p>
    </>
  );
}

export const Projects = () => {
  return (
    <div
      id="projects"
      className="mx-auto mt-[200vh] flex h-full w-[10px] snap-start flex-col items-center justify-center"
    >
      <h1 className="text-center font-work text-3xl mb-10">Projects</h1>
      <div className="flex snap-end flex-col gap-2">
        {projectsTyped.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};
