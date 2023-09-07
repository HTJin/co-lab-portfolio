import Boy from "../assets/bdayboy.jpg";
import Stare from "../assets/bdaystare.jpg";
import { AboutBorders } from "../components/Borders";

export const About = () => {
  return (
    <div className="relative left-0 top-0 mt-[200vh] h-full w-screen">
      <div
        id="about"
        className="mx-auto flex h-screen snap-center flex-col items-center justify-center"
      >
        <div className="relative flex h-[190px] w-[190px] items-center justify-center">
          <div
            className="absolute"
            data-aos="zoom-out"
            data-aos-delay="350"
            data-aos-mirror="true"
          >
            <img
              className="left-0 top-0 z-40 w-full rounded-lg"
              src={Boy}
              alt="boy"
            />
          </div>
          <img
            className="absolute left-0 top-0 z-50 w-full rounded-lg opacity-0 duration-300 hover:opacity-100"
            src={Stare}
            alt="stare"
          />
        </div>
        <div className="absolute -z-50"></div>
        <p
          className="absolute mt-[22rem] w-[350px]"
          data-aos="fade-up"
          data-aos-delay="550"
          data-aos-mirror="true"
        >
          &emsp;Hello, my name is{" "}
          <span
            className="font-semibold underline decoration-2 underline-offset-4 hover:animate-trance hover:decoration-pink-400"
            data-aos="zoom-in"
            data-aos-delay="750"
            data-aos-mirror="true"
          >
            Hyun-Tae
          </span>{" "}
          (pronounced{" "}
          <span
            className="font-semibold underline decoration-2 underline-offset-4 hover:animate-trance hover:decoration-pink-400"
            data-aos="zoom-in"
            data-aos-delay="950"
            data-aos-mirror="true"
          >
            Hunt
          </span>
          -
          <span
            className="font-semibold underline decoration-2 underline-offset-4 hover:animate-trance hover:decoration-pink-400"
            data-aos="zoom-in"
            data-aos-delay="1150"
            data-aos-mirror="true"
          >
            Tay
          </span>
          ). I'm a developer based in{" "}
          <span
            className="font-semibold underline decoration-2 underline-offset-4 hover:animate-trance hover:decoration-pink-400"
            data-aos="zoom-in"
            data-aos-delay="1350"
            data-aos-mirror="true"
          >
            Pittsburgh
          </span>
          ,{" "}
          <span
            className="font-semibold underline decoration-2 underline-offset-4 hover:animate-trance hover:decoration-pink-400"
            data-aos="zoom-in"
            data-aos-delay="1550"
            data-aos-mirror="true"
          >
            PA
          </span>{" "}
          dedicated to crafting sleek, pragmatic web applications with utmost
          precision.
        </p>
      </div>
      <div className="absolute left-1/2 top-1/2 -z-50 -translate-x-1/2 -translate-y-1/2 transform">
        <AboutBorders />
      </div>
    </div>
  );
};