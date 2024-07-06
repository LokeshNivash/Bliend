import { FunctionComponent } from 'react';
import './App.css';
import AdvertisingPage from './components/Advertising';
import HeaderComponent from './components/Header';
import ServicePage from './components/ServicePage';
import MarketingPage from './components/Marketing';
import MarketingPage2 from './components/Marketing2';

const App: FunctionComponent = () => {
  return (
      <div>
        <div className="app-page">
          <HeaderComponent />
          <ServicePage />
        </div>
        
        <div >
        <AdvertisingPage/>
        </div>
        <div className='app-page'>
          {/* <MarketingPage/> */}
          <MarketingPage2/>
        </div>
      </div>
  );
}



export default App;
