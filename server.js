import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import OpenAI from "openai";

// ✅ Manually force-load `.env`
dotenv.config({ path: "./.env" });

console.log("🔑 Checking API Key:", process.env.OPENAI_API_KEY || "❌ MISSING!");

if (!process.env.OPENAI_API_KEY) {
  console.error("❌ ERROR: OPENAI_API_KEY is missing from .env!");
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Uses API key securely
});

const app = express();
app.use(cors());
app.use(express.json());

app.post("/ask", async (req, res) => {
  try {
    const { message } = req.body;
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: message }],
    });

    res.json(response);
  } catch (error) {
    console.error("OpenAI API Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
