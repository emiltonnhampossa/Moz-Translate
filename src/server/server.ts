import Fastify from "fastify";
import { addTranslation, getTranslation } from "../core/translation";

const fastify = Fastify();

fastify.get("/translate", async (request, reply) => {
  const { word, lang } = request.query as { word: string; lang: string };

  if (!word || !lang) {
    return reply.status(400).send({ error: "Parâmetros 'word' e 'lang' são obrigatórios." });
  }

  try {
    const translation = getTranslation(word, lang);

    if (!translation) {
      return reply.status(404).send({ error: "Tradução não encontrada." });
    }

    return reply.send({ translation });
  } catch (error: any) {
    return reply.status(500).send({ error: error.message });
  }
});

fastify.post("/add", async (request, reply) => {
  const { word, translations } = request.body as {
    word: string;
    translations: Record<string, string>;
  };

  try {
    addTranslation(word, translations);
    return reply.send({ message: "Tradução adicionada com sucesso!" });
  } catch (error: any) {
    return reply.status(400).send({ error: error.message });
  }
});

fastify.listen({ port: 3000 }, () => {
  console.log("API rodando em http://localhost:3000");
});
