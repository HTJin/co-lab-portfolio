import { Github, Linkedin, Gmail, Resume } from "../components/Icons";
import Face from "../assets/avatar.png";
import { HomeBorders } from "../components/Borders";

export const Home = () => {
  return (
    <>
      <div className="relative flex h-screen w-screen flex-col items-center justify-center font-lato">
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          data-aos-mirror="true"
          className="absolute"
        >
          <img
            className="h-[180px] w-[180px] snap-center border-primary"
            src={Face}
            alt="My Face"
          />
        </div>
        <div className="absolute flex flex-col items-center">
          <div className="mt-[26rem] font-bold uppercase tracking-[.3em] text-slate-800">
            <div data-aos="fade-up" data-aos-delay="250" data-aos-mirror="true">
              Software Engineer
            </div>
          </div>
          <h1 className="font-work text-[2.3em] font-bold tracking-widest text-slate-800">
            <div data-aos="fade-up" data-aos-delay="350" data-aos-mirror="true">
              Hyun-Tae Jin
            </div>
          </h1>
          <nav className="flex gap-3 tracking-wide">
            <a className="font-semibold hover:animate-trance" href="#about">
              <div
                data-aos="fade-down-right"
                data-aos-delay="450"
                data-aos-mirror="true"
              >
                About
              </div>
            </a>
            <div data-aos="fade-up" data-aos-delay="550" data-aos-mirror="true">
              |
            </div>
            <a
              className="font-semibold hover:animate-trance"
              href="#experience"
            >
              <div
                data-aos="fade-up-right"
                data-aos-delay="450"
                data-aos-mirror="true"
              >
                Experience
              </div>
            </a>
            <div data-aos="fade-up" data-aos-delay="650" data-aos-mirror="true">
              |
            </div>
            <a className="font-semibold hover:animate-trance" href="#skills">
              <div
                data-aos="fade-up-left"
                data-aos-delay="450"
                data-aos-mirror="true"
              >
                Skills
              </div>
            </a>
            <div data-aos="fade-up" data-aos-delay="750" data-aos-mirror="true">
              |
            </div>
            <a className="font-semibold hover:animate-trance" href="#projects">
              <div
                data-aos="fade-down-left"
                data-aos-delay="450"
                data-aos-mirror="true"
              >
                Projects
              </div>
            </a>
          </nav>
          <div className="mt-4 flex items-center gap-4">
            <a
              href="https://github.com/htjin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="flex gap-2 hover:text-violet-600"
                data-aos="flip-up"
                data-aos-delay="850"
                data-aos-mirror="true"
              >
                <Github />
                GitHub
              </div>
            </a>
            <a
              href="https://linkedin.com/in/htjin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="flex gap-2 hover:text-blue-600"
                data-aos="flip-down"
                data-aos-delay="950"
                data-aos-mirror="true"
              >
                <Linkedin />
                Linkedin
              </div>
            </a>
            <a
              href="mailto:hytaej@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="flex gap-2 hover:text-red-600"
                data-aos="flip-up"
                data-aos-delay="1050"
                data-aos-mirror="true"
              >
                <Gmail />
                hytaej@gmail.com
              </div>
            </a>
          </div>
          <div className="flex justify-center">
            <a
              className="mt-4 flex flex-col items-center hover:text-tertiary"
              href="https://drive.google.com/file/d/17dckwr0RmXXsFtbu89KFRlUDfJC6uul7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="flex w-fit flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="1150"
                data-aos-mirror="true"
              >
                Resumé
                <Resume />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -z-50 -translate-x-1/2 -translate-y-1/2 transform">
        <HomeBorders />
      </div>
    </>
  );
};
