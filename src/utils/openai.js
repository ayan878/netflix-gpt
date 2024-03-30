import OpenAI from "openai";

const OPENAI_API_KEY = "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";
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
