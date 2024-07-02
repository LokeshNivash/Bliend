import { FunctionComponent } from 'react';
import './App.css';
import HeaderComponent from './components/Header';
import Main from './components/Main';
import AdvertisingPage from './components/Advertising';

const App: FunctionComponent = () => {
  return (
    <>
      <div>
        <div className="app-page">
          <HeaderComponent />
          <Main />
        </div>
        <div >
        <AdvertisingPage/>
        </div>
      </div>
    </>
  );
}

export default App;
