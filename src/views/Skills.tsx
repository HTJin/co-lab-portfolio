import {
  CodeBracket,
  BookOpen,
  CircleStack,
  WrenchScrewdriver,
  VersionControl,
  Rocket,
  AgileDiscipline,
} from "../components/Icons";

export const Skills = () => {
  return (
    <div
      id="skills"
      className="mx-auto mt-[200vh] flex h-screen w-[350px] snap-center flex-col items-center justify-center font-lato md:w-[500px]"
    >
      <div data-aos="fade-down" data-aos-delay="150" data-aos-mirror="true">
        <h1 className="mx-auto font-work text-3xl mb-10">Skills</h1>
      </div>
      <div className="flex flex-col gap-2">
        <div
          className="flex items-center gap-4"
          data-aos="fade-right"
          data-aos-delay="350"
          data-aos-mirror="true"
        >
          <div className="animate-trance">
            <CodeBracket />
          </div>
          <h2 className="text-xl font-semibold underline decoration-pink-400 decoration-2 underline-offset-4">
            Languages
          </h2>
        </div>
        <div
          className="mb-2 ml-10"
          data-aos="fade-left"
          data-aos-delay="1050"
          data-aos-mirror="true"
        >
          Javascript, Typescript, Python, Java, PHP, ES6, HTML5, CSS3
        </div>
        <div
          className="flex items-center gap-4"
          data-aos="fade-right"
          data-aos-delay="450"
          data-aos-mirror="true"
        >
          <div className="animate-trance">
            <BookOpen />
          </div>
          <h2 className="text-xl font-semibold underline decoration-pink-400 decoration-2 underline-offset-4">
            Libraries / Frameworks
          </h2>
        </div>
        <div
          className="mb-2 ml-10"
          data-aos="fade-left"
          data-aos-delay="1150"
          data-aos-mirror="true"
        >
          React, Next, Redux, Vue, Nuxt, Vuex, Angular 2, TailwindCSS,
          Bootstrap, Material UI, Vuetify, Node, Express, Flask, Jinja
        </div>
        <div
          className="flex items-center gap-4"
          data-aos="fade-right"
          data-aos-delay="550"
          data-aos-mirror="true"
        >
          <div className="animate-trance">
            <CircleStack />
          </div>
          <h2 className="text-xl font-semibold underline decoration-pink-400 decoration-2 underline-offset-4">
            Databases
          </h2>
        </div>
        <div
          className="mb-2 ml-10"
          data-aos="fade-left"
          data-aos-delay="1250"
          data-aos-mirror="true"
        >
          MySQL, PostgreSQL, MongoDB, Firebase
        </div>
        <div
          className="flex items-center gap-4"
          data-aos="fade-right"
          data-aos-delay="650"
          data-aos-mirror="true"
        >
          <div className="animate-trance">
            <WrenchScrewdriver />
          </div>
          <h2
            className="text-xl font-semibold underline decoration-pink-400 decoration-2
            underline-offset-4"
          >
            Tools
          </h2>
        </div>
        <div
          className="mb-2 ml-10"
          data-aos="fade-left"
          data-aos-delay="1350"
          data-aos-mirror="true"
        >
          AWS, Postman, Insomnia, VSCode, Terminal, Powershell, Jira, Harvest
        </div>
        <div
          className="flex items-center gap-4"
          data-aos="fade-right"
          data-aos-delay="750"
          data-aos-mirror="true"
        >
          <div className="animate-trance">
            <VersionControl />
          </div>
          <h2 className="text-xl font-semibold underline decoration-pink-400 decoration-2 underline-offset-4">
            Version Control
          </h2>
        </div>
        <div
          className="mb-2 ml-10"
          data-aos="fade-left"
          data-aos-delay="1450"
          data-aos-mirror="true"
        >
          Git, GitHub, GitLab
        </div>
        <div
          className="flex items-center gap-4"
          data-aos="fade-right"
          data-aos-delay="850"
          data-aos-mirror="true"
        >
          <div className="animate-trance">
            <Rocket />
          </div>
          <h2 className="text-xl font-semibold underline decoration-pink-400 decoration-2 underline-offset-4">
            Deployment
          </h2>
        </div>
        <div
          className="mb-2 ml-10"
          data-aos="fade-left"
          data-aos-delay="1550"
          data-aos-mirror="true"
        >
          Glitch, Render, Firebase, Vercel, Heroku, Netlify
        </div>
        <div
          className="flex items-center gap-4"
          data-aos="fade-right"
          data-aos-delay="950"
          data-aos-mirror="true"
        >
          <div className="animate-trance">
            <AgileDiscipline />
          </div>
          <h2 className="text-xl font-semibold underline decoration-pink-400 decoration-2 underline-offset-4">
            Discipline
          </h2>
        </div>
        <div
          className="mb-2 ml-10"
          data-aos="fade-left"
          data-aos-delay="1650"
          data-aos-mirror="true"
        >
          Agile, Scrum, Resolve Merge Conflicts, Code Reviews, Configure API
          Endpoints, Functional/OOP, UI/UX
        </div>
      </div>
    </div>
  );
};
