import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load knowledge data
const knowledgePath = path.join(__dirname, 'src', 'data', 'knowledge.json');
let knowledgeData = {};
try {
    const data = fs.readFileSync(knowledgePath, 'utf8');
    knowledgeData = JSON.parse(data);
} catch (err) {
    console.error("Error reading knowledge.json:", err);
}

app.post('/api/chat', async (req, res) => {
    const { messages } = req.body;
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'OpenAI API key not configured on server' });
    }

    const systemMessage = {
        role: "system",
        content: `You are an AI assistant for Jayditch's portfolio. 
        Use the following JSON data to answer questions about Jayditch accurately and concisely.
        Do not hallucinate. If the answer is not in the data, say you don't know but suggest contacting him directly.
        Keep responses professional but friendly.

        DATA: ${JSON.stringify(knowledgeData)}`
    };

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4o",
                messages: [systemMessage, ...messages],
                max_tokens: 300
            })
        });

        const data = await response.json();

        if (data.error) {
            console.error("OpenAI API Error:", data.error);
            return res.status(500).json({ error: data.error.message || 'Error from OpenAI' });
        }

        res.json(data);

    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
