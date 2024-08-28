import { useEffect } from 'react';
import './App.css';
const telegram = window.Telegram.WebApp
function App() {

  useEffect(() => {
    telegram.ready();
  }, [])

  const onClose = () => {
    telegram.close();
  }

  return (
    <div className="App">
      work
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
