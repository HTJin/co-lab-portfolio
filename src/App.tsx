import Face from "./assets/avatar.png";
import { Github, Linkedin, Gmail } from "./components/Icons";

function App() {
  return (
    <div className="font-lato fixed flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-amber-100 via-sky-100 to-violet-100">
      <img
        className="border-primary absolute h-40 w-fit"
        src={Face}
        alt="My Face"
      />
      <div className="absolute flex flex-col items-center">
        <div className="mt-[100%] font-bold uppercase tracking-[.3em] text-slate-800">
          Software Engineer
        </div>
        <h1 className="font-work text-[2.3em] font-bold tracking-widest text-slate-800">
          Hyun-Tae Jin
        </h1>
        <nav className="flex gap-3 tracking-wide">
          <a className="hover:animate-trance font-semibold" href="#about">
            About
          </a>
          |
          <a className="hover:animate-trance font-semibold" href="#experience">
            Experience
          </a>
          |
          <a className="hover:animate-trance font-semibold" href="#skills">
            Skills
          </a>
          |
          <a className="hover:animate-trance font-semibold" href="#projects">
            Projects
          </a>
        </nav>
        <div className="mt-4 flex items-center gap-4">
          <a
            className="hover:animate-trance flex gap-2"
            href="https://github.com/htjin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            GitHub
          </a>
          <a
            className="hover:animate-trance flex gap-2"
            href="https://linkedin.com/in/htjin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
            Linkedin
          </a>
          <a
            className="hover:animate-trance flex gap-2"
            href="mailto:hytaej@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Gmail />
            hytaej@gmail.com
          </a>
        </div>
      </div>

      <div id="about" className="flex flex-col">

      </div>
      <div id="experience" className="flex flex-col">

      </div>
      <div id="skills" className="flex flex-col">

      </div>
      <div id="projects" className="flex flex-col">

      </div>

      <div className="border-primary flex items-center justify-center rounded-full border border-dashed p-36">
        <div className="border-secondary flex items-center justify-center rounded-full border border-dashed p-24">
          <div className="border-tertiary flex items-center justify-center rounded-full border border-dashed border-opacity-20 p-16">
            <div className="border-primary flex items-center justify-center rounded-full border border-dashed p-10">
              <div className="border-tertiary flex items-center justify-center rounded-full border border-dashed border-opacity-20 p-16">
                <div className="border-secondary flex items-center justify-center rounded-full border border-dashed p-24">
                  <div className="border-tertiary flex items-center justify-center rounded-full border border-dashed border-opacity-20 p-16">
                    <div className="border-primary flex h-60 w-60 items-center justify-center rounded-full border border-dashed p-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
