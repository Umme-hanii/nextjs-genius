"use server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessage) => {
  const response = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant" },
      { role: "user", content: chatMessage },
    ],
    model: "gpt-3.5-turbo",
    temperature: 0,
  });
  console.log("RESPONSE.CHOICES[0]", response.choices[0]);
  console.log("ENTIRE RESPONSE", response);

  return "awesome";
};
