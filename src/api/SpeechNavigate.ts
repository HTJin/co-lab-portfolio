import { Wit } from "node-wit";

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

const client = new Wit({ accessToken: "EQCWZETXGKQENZISGKL5O5NQV4JWPWRL" });

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

      const witResponse = await client.message(speechResult, {});
      const intent: string | undefined = witResponse.intents[0]?.name;

      navigateBasedOnIntent(intent);
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
