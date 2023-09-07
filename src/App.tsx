import { Home } from "./views/Home";
import { About } from "./views/About";
import { Experience } from "./views/Experience";

function App() {
  return (
    <>
      <Home />
      <About />
      <Experience />

      <div
        id="skills"
        className="mt-[200vh] flex h-screen snap-center items-center justify-center"
      >
        {/* Your Skills content */}
      </div>
      <div
        id="projects"
        className="mt-[200vh] flex h-screen snap-center items-center justify-center"
      >
        {/* Your Projects content */}
      </div>
    </>
  );
}

export default App;
