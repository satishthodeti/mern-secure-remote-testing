import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get("http://192.898.0.100:5000/api/message")
      .then((res) => setMsg(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem', fontSize: '1.5rem' }}>
      <h2>MERN App with Vite + Express</h2>
      <p><strong>Backend Message:</strong> {msg}</p>
    </div>
  );
}

export default App;
