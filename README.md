# 🎵 Cânticos para Discursos Públicos

> **Guia inteligente de sugestão de cânticos para Discursos Públicos das Testemunhas de Jeová**

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://canticos-discursos.vercel.app)
[![PWA](https://img.shields.io/badge/PWA-Instalável-blue?logo=googlechrome)](https://canticos-discursos.vercel.app)
[![License](https://img.shields.io/badge/Licença-MIT-green)](LICENSE)

---

## 📖 Sobre o Projeto

O **Cânticos App** é uma Progressive Web App (PWA) que auxilia oradores e coordenadores de congregação na escolha dos cânticos mais adequados para cada discurso público, com base em critérios teocráticos e musicais.

Para cada um dos **~200 esboços de discursos públicos**, o app sugere **3 cânticos cuidadosamente selecionados**, acompanhados de uma explicação detalhada de **por que cada cântico se encaixa perfeitamente** no tema e no fluxo do discurso.

---

## ✨ Funcionalidades

- 🔍 **Busca por número** — Digite o número do esboço e receba as sugestões instantaneamente
- 📋 **Resumo do esboço** — Visualize o objetivo principal do discurso antes de escolher
- 🎼 **3 sugestões por discurso** — Cada cântico com justificativa teológica e lírica detalhada
- 📱 **PWA instalável** — Funciona como app nativo no celular e no desktop
- ✈️ **Modo offline** — Após a primeira visita, funciona sem internet (Service Worker + Cache)
- ⚡ **Zero dependências** — Frontend 100% estático, sem frameworks, carrega instantaneamente

---

## 🚀 Acesso

Acesse diretamente pelo navegador ou instale como app:

**🌐 [canticos-discursos.vercel.app](https://canticos-discursos.vercel.app)**

Para instalar no celular: abra o link no navegador → toque em **"Adicionar à tela inicial"**.

---

## 🛠️ Como Usar

1. Acesse o app pelo link acima
2. Digite o **número do esboço** do discurso público (ex: `1`, `44`, `127`)
3. Clique em **Buscar**
4. Veja o tema, o resumo do esboço e as **3 sugestões de cânticos** com suas justificativas

---

## 🏗️ Arquitetura

```
canticos-discursos/
│
├── public/
│   ├── index.html          # App principal (HTML + CSS + JS vanilla)
│   ├── db_canticos.json    # Banco de dados com todos os discursos e sugestões
│   ├── manifest.json       # Configuração PWA
│   ├── sw.js               # Service Worker (cache offline)
│   └── icon.svg            # Ícone do app
│
├── data/                   # Scripts de geração do banco de dados
│   ├── gerador_definitivo.py         # Gerador estático com curadoria manual
│   ├── gerar_banco_ia.py             # Gerador com sugestões via Google Gemini AI
│   ├── gerar_banco_estatico.py       # Gerador de banco estático
│   ├── aplicar_guia_3opcoes.py       # Aplica guia com 3 opções por discurso
│   ├── analise_profunda_offline.py   # Análise aprofundada offline
│   └── app_canticos.py               # Versão desktop com Tkinter + Gemini API
│
├── vercel.json             # Configuração de deploy
└── package.json            # Metadados do projeto
```

### Fluxo de dados

```
talks.json + songs.json
        ↓
  gerador_definitivo.py  (curadoria manual + IA)
        ↓
  db_canticos.json  (banco estático ~2700 linhas)
        ↓
  index.html  (fetch + renderização no browser)
        ↓
  Usuário vê as sugestões ✓
```

---

## 🧠 Como o Banco de Dados foi Criado

O `db_canticos.json` contém os dados de todos os discursos públicos com curadoria de dois níveis:

1. **Curadoria manual** — Análise temática aprofundada de cada esboço, mapeando o fluxo do discurso (introdução, desenvolvimento e conclusão) com cânticos que reforçam cada etapa
2. **Assistência de IA** — Uso da API do **Google Gemini** (`gemini-1.5-flash`) para geração e refinamento das justificativas, garantindo linguagem precisa e coerente com o contexto teocrático

Cada sugestão inclui:
```json
{
  "numero": 140,
  "titulo": "Vida eterna, enfim!",
  "motivo": "Por que escolher: A primeira seção do discurso aborda a declaração de Jesus em João 17:3. Terminar o discurso com este cântico consolida essa gloriosa esperança de vida eterna, dando um tom triunfante."
}
```

---

## 💻 Tecnologias

| Camada | Tecnologia |
|---|---|
| Frontend | HTML5, CSS3, JavaScript (vanilla) |
| PWA | Service Worker, Web App Manifest, Cache API |
| Backend | Estático — sem servidor |
| Banco de dados | JSON estático |
| Geração de dados | Python 3, Google Gemini API |
| Deploy | Vercel (CD automático via GitHub) |

---

## 🔧 Rodando Localmente

Basta servir os arquivos da pasta `public/` com qualquer servidor HTTP local:

```bash
# Com Python
cd public
python -m http.server 8000
# Acesse: http://localhost:8000
```

```bash
# Com Node.js
cd public
npx serve .
```

---

## 📦 Gerando o Banco de Dados (para desenvolvedores)

Para regenerar o `db_canticos.json` com IA:

```bash
# Instale as dependências
pip install google-generativeai

# Configure sua chave da API do Gemini
# Edite gerar_banco_ia.py e insira sua API_KEY

# Execute o gerador
python gerador_definitivo.py
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você encontrar um discurso sem sugestão, quiser melhorar uma justificativa ou adicionar funcionalidades:

1. Faça um **fork** do projeto
2. Crie uma branch: `git checkout -b minha-melhoria`
3. Faça suas alterações e commit: `git commit -m "Melhoria: descrição"`
4. Envie um Pull Request

---

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

<p align="center">
  Feito com ❤️ para auxiliar a congregação cristã
</p>
