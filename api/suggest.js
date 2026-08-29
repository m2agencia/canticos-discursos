const { GoogleGenerativeAI } = require('@google/generativeai');
const talks = require('../data/talks.json');
const songs = require('../data/songs.json');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { numero } = req.body;
  const tema = talks[String(numero)];

  if (!tema) {
    return res.status(404).json({ error: `Discurso ${numero} não encontrado.` });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Chave de API não configurada no servidor (Vercel).' });
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const listaCanticos = Object.entries(songs)
    .map(([num, titulo]) => `${num}: ${titulo}`)
    .join('\n');

  const prompt = `
  Tema do discurso: "${tema}"
  Aqui está a lista de todos os cânticos disponíveis:
  ${listaCanticos}
  
  Por favor, escolha 3 cânticos dessa lista que combinem bem com o tema do discurso.
  Para cada um, forneça:
  1. O número e o título do cântico.
  2. Uma explicação curta e clara do porquê esse cântico combina com o tema.
  Formate de forma agradável em HTML leve ou Markdown.
  `;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    res.status(200).json({ tema, sugestoes: text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao gerar sugestões com a IA.' });
  }
};
