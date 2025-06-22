# 🧠 Dev Helper AI

A local AI-powered chatbot built with **NestJS** for backend and **React + Vite** for frontend, using the **Llama3 model via Ollama**. This project enables you to chat with an LLM without using any paid API services like OpenAI.

---

## ✨ Features

- Chat with a local LLM (Llama3) using Ollama
- Simple prompt/response interface
- Built fully with TypeScript
- No need for API keys or OpenAI account
- Fullstack app with React frontend and NestJS backend

---

## 🔧 Tech Stack

| Layer     | Stack                         |
|-----------|-------------------------------|
| Frontend  | React + Vite + Tailwind CSS   |
| Backend   | NestJS + Axios                |
| Model     | Ollama + Llama3               |
| Language  | TypeScript                    |

---

## 🟢 Startup Guide

### 1. Install Prerequisites

- **[Node.js](https://nodejs.org/)** (v18 or above)
- **[Ollama](https://ollama.com/download)** (local LLM model runner)

---

### 2. Start Ollama & Pull Llama3

```bash
# Run this ONCE to pull and launch the model:
ollama run llama3
```

This will start the LLM API server at `http://localhost:11434`.

Leave it running while using the app.

---

### 3. Start the Backend (NestJS)

```bash
cd backend
npm install
npm run start
```

This launches the API server at `http://localhost:3000`, which connects to Ollama and exposes a `/chat` endpoint.

test your end point

```bash
curl -X POST http://localhost:3000/chat -H "Content-Type: application/json" -d '{"prompt": "can you draw an apple image for me？"}
```

---

### 4. Start the Frontend (React + Vite)

In a new terminal tab:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at: [http://localhost:5173](http://localhost:5173)

---

### ✅ You’re Ready!

Open your browser → go to `http://localhost:5173` → enter a prompt → get an AI-generated reply powered by Llama3 (via Ollama).

---

## 🖼 Screenshots

> _(Add screenshots here if available)_
> Example:
> ![screenshot](./screenshots/demo.png)

---

## 🔌 API Reference

### POST `/chat`

**Request Body:**

```json
{
  "prompt": "What is JavaScript?"
}
```

**Response:**

```json
{
  "reply": "JavaScript is a versatile programming language..."
}
```

---

## 📁 Project Structure

```
dev-helper-ai/
├── backend/             # NestJS backend
│   └── src/chat/        # Chat module
├── frontend/            # React + Vite frontend
│   └── src/components/  # Chat UI component
```

---

## 🤔 Why Ollama?

- No API keys or subscriptions
- Run everything locally, ideal for learning & privacy
- Works offline after downloading model

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [Ollama](https://ollama.com) for local model serving
- [Llama3](https://llama.meta.com) by Meta
- [NestJS](https://nestjs.com) and [React](https://react.dev)
