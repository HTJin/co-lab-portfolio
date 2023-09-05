import Face from "./assets/avatar.png";
import { Github, Linkedin } from "./components/Icons";

function App() {
  return (
    <div className="font-lato fixed flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-amber-100 via-sky-100 to-violet-100">
      <img
        className="border-primary absolute h-40 w-fit"
        src={Face}
        alt="My Face"
      />
      <div className="absolute flex flex-col items-center">
        <div className="mt-72 font-bold uppercase tracking-[.3em] text-slate-800">
          Software Engineer
        </div>
        <h1 className="font-work text-[2.3em] font-bold tracking-widest text-slate-800">
          Hyun-Tae Jin
        </h1>
        <nav className="flex gap-3 tracking-wide">
          <a href="#about">About</a> | <a href="#experience">Experience</a> |
          <a href="#skills">Skills</a> | <a href="#projects">Projects</a>
        </nav>
        <div className="flex w-[50px]">
          <Github />
          <Linkedin />
        </div>
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
