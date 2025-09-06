import { googleSearch } from './src/sellenuim.js';

(async () => {
  const success = await googleSearch("OpenAI ChatGPT");
  console.log("Function returned:", success);
})();
