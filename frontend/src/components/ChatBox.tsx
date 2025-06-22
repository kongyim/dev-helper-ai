import { useState } from 'react';
import { sendPrompt } from '../api/chat';

export default function ChatBox() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await sendPrompt(prompt);
    setResponse(res.reply);
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <textarea
        className="w-full p-2 border rounded"
        rows={4}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Please wait...' : 'Send'}
      </button>

      {response && (
        <div className="mt-4 p-4 border rounded bg-gray-100 whitespace-pre-wrap">
          {response}
        </div>
      )}
    </div>
  );
}
