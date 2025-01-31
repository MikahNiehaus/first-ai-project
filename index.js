import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY
});

async function getCompletion() {
    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: "Hello, OpenAI!" }]
    });

    console.log(response);
}

getCompletion();
