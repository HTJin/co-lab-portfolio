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

class CustomSpeechRecognition {
  start!: () => void;
  addEventListener!: (
    type: string,
    listener: (event: ISpeechRecognitionEvent) => void,
  ) => void;
}

interface Window {
  SpeechRecognition: typeof CustomSpeechRecognition;
  webkitSpeechRecognition: typeof CustomSpeechRecognition;
}

declare let window: Window & typeof globalThis;

document.addEventListener("DOMContentLoaded", function () {
  const micButton = document.getElementById("micButton")!;
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  micButton.addEventListener("click", function () {
    recognition.start();
  });

  recognition.addEventListener(
    "result",
    async function (event: ISpeechRecognitionEvent) {
      const speechResult = event.results[0][0].transcript;

      try {
        const response = await axios.post("/api/speech-to-text", {
          transcript: speechResult,
        });
        const intent: string | undefined = response.data.intent;
        navigateBasedOnIntent(intent);
      } catch (error) {
        console.error("Error communicating with server:", error);
      }
    },
  );
});

function navigateBasedOnIntent(intent: string | undefined) {
  switch (intent) {
    case "navigate_about":
      window.location.href = "#about";
      break;
    case "navigate_experience":
      window.location.href = "#experience";
      break;
    case "navigate_skills":
      window.location.href = "#skills";
      break;
    case "navigate_projects":
      window.location.href = "#projects";
      break;
    default:
      console.log("Unknown intent");
      break;
  }
}
