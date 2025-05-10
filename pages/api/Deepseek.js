// pages/api/deepseek.js

export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Only POST requests allowed" });
    }
  
    const { userMessage } = req.body;
  
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`, // Keep your key in .env.local
          "Content-Type": "application/json",
          "HTTP-Referer": "https://your-site.com",
          "X-Title": "DeepSeek Chat",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1-distill-llama-70b:free",
          messages: [
            {
              role: "user",
              content: userMessage
            }
          ]
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        return res.status(response.status).json({ error: data });
      }
  
      res.status(200).json({ reply: data.choices?.[0]?.message?.content || "No reply." });
    } catch (error) {
      res.status(500).json({ error: "Server error", details: error.message });
    }
  }
  