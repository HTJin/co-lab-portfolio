import express from "express";
import cors from "cors";
import pkg from "node-wit";
const { Wit } = pkg;

const app = express();
const port = 3001;

const client = new Wit({ accessToken: "IJWMYWCOXOZJBK4XD3MDGFKTHPT5LFCQ" });

app.use(cors());
app.use(express.json());

app.post("/speech", async (req, res) => {
  const { speechText } = req.body;
  const witResponse = await client.message(speechText, {});
  const intent = witResponse.intents[0]?.name;
  res.json({ intent });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
