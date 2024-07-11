import { FunctionComponent, useState } from 'react';
import './App.css';
import LandingPage from './page/LandingPage';
import SplashScreen from './page/SplashScreen';


const App: FunctionComponent = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleTimeout = () => {
    setShowSplash(false);
  };
  return (
    <div className="app">
    {showSplash ? (
      <SplashScreen onTimeout={handleTimeout} />
    ) : (
      <LandingPage />
    )}
  </div>
  );
}



export default App;
