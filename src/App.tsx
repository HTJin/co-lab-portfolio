import { Home } from "./views/Home";
import { About } from "./views/About";
import { Experience } from "./views/Experience";
import { Skills } from "./views/Skills";
import { Projects } from "./views/Projects";
// import "./api/SpeechNavigate.ts";

function App() {
  return (
    <>
      <button
        id="micButton"
        className="fixed bottom-[10px] right-[10px] cursor-pointer"
      >
        🎤
      </button>
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
