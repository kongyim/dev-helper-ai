import axios from 'axios';

export const sendPrompt = async (prompt: string) => {
  const res = await axios.post('http://localhost:3000/chat', { prompt });
  return res.data;
};