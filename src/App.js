import { useEffect, useState } from 'react';
import './App.css';
const telegram = window.Telegram.WebApp
const backendUrl = "http://127.0.0.1:5000"; // for local development

function App() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    telegram.ready();
  }, [])

  const verifyUser = async (authorizationData) => {
    try {
      const response = await fetch(`${backendUrl}/auth/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(authorizationData),
      });

      const data = await response.json();
      if (data.success) {
        setResult('Verification successful!');
      } else {
        setResult(`Verification failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error during verification:', error);
      setResult('An error occurred during verification.');
    }
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => verifyUser(telegram.initData)}>Verify User</button>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;