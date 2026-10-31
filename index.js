const OpenAI = require("openai");
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: "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",
});
async function main() {
  const c = await openai.chat.completions.create({
    model: "meta-llama/llama-3.2-3b-instruct:free",
    messages: [{ role: "user", content: "Hello test" }]
  });
  console.log("SUCCESS:", c.choices[0].message.content);
}
main();