import readline from "readline";
import { addTranslation } from "../core/translation";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query: string): Promise<string> {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  console.log("Bem-vindo ao gerenciador de traduções da Moz Translate!");

  try {
    const word = await askQuestion("Digite a palavra em português: ");
    const changana = await askQuestion("Tradução em Changana: ");
    const english = await askQuestion("Tradução em Inglês: ");

    addTranslation(word, { changana, english });
    console.log("Tradução adicionada com sucesso!");
  } catch (error) {
    console.error("Erro:");
  } finally {
    rl.close();
  }
}

main();
