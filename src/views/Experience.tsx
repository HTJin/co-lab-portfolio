import { useState } from "react";
import { experience } from "../data/experience";

export const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState("Coding Temple");

  const initialCompanyButtonDelay = 250;
  const titleStartDelay =
    initialCompanyButtonDelay + experience.length * 100 + 100;
  const locationStartDelay = titleStartDelay + 100;
  const descriptionStartDelay = locationStartDelay + 100;

  return (
    <div
      id="experience"
      className="mx-auto mt-[200vh] flex h-screen w-[350px] flex-col items-center justify-center gap-y-10 font-lato text-sm md:w-[500px]"
    >
      <div data-aos="fade-down" data-aos-delay="150" data-aos-mirror="true">
        <h1 className="mx-auto font-work text-3xl">Experience</h1>
      </div>
      <div className="flex w-full justify-evenly">
        {experience.map((item, index) => (
          <button
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${initialCompanyButtonDelay + index * 100}`}
            data-aos-mirror="true"
            onClick={() => setSelectedCompany(item.company)}
            className={
              selectedCompany === item.company
                ? "animate-trance font-semibold underline decoration-pink-400 decoration-2 underline-offset-4"
                : "font-semibold underline decoration-black decoration-2 underline-offset-4 hover:animate-trance hover:decoration-pink-400"
            }
          >
            {item.company}
          </button>
        ))}
      </div>

      {experience.map((item, index) => {
        if (item.company === selectedCompany) {
          return (
            <div key={index} className="flex snap-center flex-col">
              <h1
                className="font-work text-xl"
                data-aos="fade-left"
                data-aos-delay={`${titleStartDelay}`}
                data-aos-mirror="true"
              >
                {item.title}
              </h1>
              <h2
                className="text-md font-work font-bold"
                data-aos="fade-left"
                data-aos-delay={`${locationStartDelay}`}
                data-aos-mirror="true"
              >
                {item.location}
              </h2>
              <ul className="ml-5 list-disc">
                <div className="mt-2 flex flex-col gap-2">
                  {item.description.map((desc, i) => (
                    <li
                      key={i}
                      data-aos="fade-right"
                      data-aos-delay={`${descriptionStartDelay + i * 100}`}
                      data-aos-mirror="true"
                    >
                      {desc}
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          );
        }
        return "";
      })}
    </div>
  );
};
