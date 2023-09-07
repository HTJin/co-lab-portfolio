export const Experience = () => {


  return (
    <div
      id="experience"
      className="mx-auto mt-[200vh] flex h-screen w-[350px] flex-col items-center justify-center gap-y-10 text-sm md:w-[500px]"
    >
      <div className="flex snap-center flex-col">
        <h1 className="font-work text-xl">Full Stack Developer Trainee</h1>
        <h2 className="text-md font-work font-bold">
          Coding Temple | Chicago, IL | Remote
        </h2>
        <ul className="ml-5 list-disc">
          <li>
            Graduated from a rigorous bootcamp with a focus on Python, Flask,
            React, Typescript, Javascript, HTML/CSS, and SQL
          </li>
          <li>
            Enhanced programming proficiency by developing diverse personal
            projects, honing syntax knowledge, and adopting modern coding
            standards
          </li>
          <li>
            Gained experience integrating third-party APIs and libraries,
            building full-stack applications with custom endpoints and JWT
          </li>
          <li>
            Oversaw repositories for group projects, directing merge and rebase
            operations of different codebases
          </li>
        </ul>
      </div>
      <div className="flex snap-center flex-col">
        <h1 className="font-work text-xl">Application Developer</h1>
        <h2 className="text-md font-work font-bold">
          Highmark Health Solutions | Pittsburgh, PA | Hybrid
        </h2>
        <ul className="ml-5 list-disc">
          <li>
            Served as lead developer for a web portal project enabling
            healthcare professionals to search patient data based on UMI
          </li>
          <li>
            Collaborated within a full scrum team, managed story points for
            sprints, and mentored a fellow developer in Javascript/HTML/CSS to
            utilize Vue with a Java backend
          </li>
          <li>
            Maintained git-flow with GitLab, configured the Babel Transpiler for
            IE7 compatibility and championed the adoption of Vue as a framework
            within the company
          </li>
          <li>
            Leveraged the PegaSystems Platform to maintain and develop
            Highmark's Utilization Management tool for healthcare professionals
            in Pittsburgh
          </li>
        </ul>
      </div>
      <div className="flex snap-center flex-col">
        <h1 className="font-work text-xl">Web Developer</h1>
        <h2 className="text-md font-work font-bold">
          Checkmate Digital | New Haven, CT | Remote
        </h2>
        <ul className="ml-5 list-disc">
          <li>
            Engaged in end-to-end project development, collaborating with the
            UX/UI team and providing comprehensive web solutions for tech
            startup clients under the agency's purview
          </li>
          <li>
            Pioneered a tech stack transition from Angular to React in close
            partnership with the CTO, enhancing the agency's technological
            capabilities
          </li>
          <li>
            Expanded technical knowledge by learning various JavaScript
            frameworks and libraries, adhering to industry-defined coding
            standards, and implementing effective git-flow practices
          </li>
          <li>
            Cultivated a deep understanding of the product life cycle,
            contributing to all stages from conceptualization to deployment
          </li>
        </ul>
      </div>
    </div>
  );
};
