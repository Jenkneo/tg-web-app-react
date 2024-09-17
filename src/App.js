import { useEffect, useState } from 'react';
import { useTelegram } from "./hooks/useTelegram";
import { useUserVerification } from "./hooks/useUserVerification";
import './App.css';
import Profile from "./components/Profile/Profile";
import EnergyList from "./components/EnergyList/EnergyList";
import Energy from "./components/Energy/Energy";
// import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom'


function App() {
  // const [ result, setResult ] = useState(null);
  const { telegram } = useTelegram();
  const { result, verifyUser } = useUserVerification(telegram);

  useEffect(() => {
    telegram.ready();
  }, telegram);

  // useEffect(() => {
  //   verifyUser(telegram.initData); // Автоматическая верификация при монтировании компонента
  // }, verifyUser);

  // return (
  //   <div className="App">
  //     <div>
  //       <p>{result}</p> {/* Выводим результат верификации */}
  //     </div>
  //   </div>
  // );
  
  return (
    <div className={`App ${telegram.colorScheme}`}>
      {/* <EnergyList /> */}
      {/* <Profile /> */}
      <Routes>
        <Route index element={<Profile />}/>
        <Route path={'/energy'} element={<EnergyList />}/>
        <Route path={"/energy/:id"} element={<Energy />} />
      </Routes>
      {/* <button onClick={onToggleButton}>toggle</button> */}
      {/* <Navigation /> */}
    </div>
  );
}

export default App;