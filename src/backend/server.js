import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  try {
    const result = await chatSession.sendMessage(prompt.toString());
    console.log(result.response.text());
    return result.response.text();
  } catch (error) {
    console.error('Error fetching response:', error);
    // Handle the error appropriately, e.g., return a default message
    console.log('Default response: Unable to generate a response at this time.');
  }
}

export default run;