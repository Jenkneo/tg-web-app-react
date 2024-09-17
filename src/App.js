import { useEffect, useState } from 'react';
import { useTelegram } from "./hooks/useTelegram";
import './App.css';
import Profile from "./components/Profile/Profile";
import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom'
// import ProductList from "./components/ProductList/ProductList";
// import Form from "./components/Form/Form";
// const backendUrl = "http://127.0.0.1:5000"; // for local development

function App() {
  const [result, setResult] = useState(null);
  const { telegram, onToggleButton } = useTelegram(); 


  useEffect(() => {
    telegram.ready();
  }, [])

  // const verifyUser = async (authorizationData) => {
  //   try {
  //     const response = await fetch(`${backendUrl}/auth/verify`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(authorizationData),
  //     });

  //     const data = await response.json();
  //     if (data.success) {
  //       setResult('Verification successful!');
  //     } else {
  //       setResult(`Verification failed: ${data.message}`);
  //     }
  //   } catch (error) {
  //     console.error('Error during verification:', error);
  //     setResult('An error occurred during verification.');
  //   }
  // };

  // return (
  //   <div className="App">
  //     <div>
  //       <button onClick={() => verifyUser(telegram.initData)}>Verify User</button>
  //       <p>{result}</p>
  //     </div>
  //   </div>
  // );

  return (
    <div className={`App ${telegram.colorScheme}`}>
      {/* <Profile /> */}
      <Routes>
        <Route index element={<Profile />}/>
        {/* <Route path={'/form'} element={<Form />}/> */}
      </Routes>
      {/* <button onClick={onToggleButton}>toggle</button> */}
      <Navigation />
    </div>
  );
}

export default App;