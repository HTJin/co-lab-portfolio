import { useEffect } from "react";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { Experience } from "./views/Experience";
import { Skills } from "./views/Skills";
import { Projects } from "./views/Projects";
import axios from "axios";

interface ISpeechRecognitionEvent {
  results: [
    {
      [index: number]: {
        transcript: string;
      };
    },
  ];
}

type SpeechRecognitionType = {
  new (): {
    start: () => void;
    continuous: boolean;
    addEventListener: (
      type: string,
      listener: (event: ISpeechRecognitionEvent) => void,
    ) => void;
  };
};

// Extend the Window interface
interface WindowWithSpeechRecognition extends Window {
  SpeechRecognition: SpeechRecognitionType;
  webkitSpeechRecognition: SpeechRecognitionType;
}

declare let window: WindowWithSpeechRecognition;

function App() {
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    document
      .getElementById("micButton")!
      .addEventListener("click", function () {
        console.log("Mic button clicked, starting recognition.");
        recognition.start();
      });

    recognition.addEventListener(
      "result",
      async function (event: ISpeechRecognitionEvent) {
        console.log("Result received: ", event.results[0][0].transcript);
        const speechResult = event.results[0][0].transcript;

        try {
          const response = await axios.post("http://localhost:3001/speech", {
            speechText: speechResult,
          });
          const intent = response.data.intent;
          if (intent) {
            console.log("Intent received: ", intent);
            window.location.href = `#${intent.split("_")[1]}`;
          }
        } catch (error) {
          console.error("Error communicating with server:", error);
        }
      },
    );

    // recognition.addEventListener("speechend", function () {
    //   console.log("Speech has stopped being detected.");
    // });

    // recognition.addEventListener("error", function (event) {
    //   console.log("An error occurred in recognition: ", event);
    // });

    // recognition.addEventListener("nomatch", function () {
    //   console.log("No speech was detected.");
    // });
  }, []);

  return (
    <>
      <button
        id="micButton"
        className="fixed bottom-[10px] right-[10px] z-50 cursor-pointer"
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
