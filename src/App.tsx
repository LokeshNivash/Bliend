import { FunctionComponent } from 'react';
import './App.css';
import AdvertisingPage from './components/Advertising';
import HeaderComponent from './components/Header';
import ServicePage from './components/ServicePage';
import SoftwareSolutions from './components/SoftwareSolutions';
import ScrollingHeader from './components/ScrollingHeader';
import TestimonialPage from './components/TestimonialPage';
import Footer from './components/FooterPage';
import MarketingPage from './components/Marketing';


const App: FunctionComponent = () => {
  return (
      <div>
        <div className="app-page">
          <HeaderComponent />
          <div style={{height:"50px",width:'auto'}}></div>
          <ScrollingHeader/>
          <div style={{height:"5px",width:'auto'}}></div>
          <ServicePage />
        </div>

        <div >
        <AdvertisingPage/>
        </div>
        <div className='app-page'>
          <MarketingPage />
        </div>
        <div>
          <SoftwareSolutions />
        </div>
        <div className='app-page'>
          <TestimonialPage />
          <div style={{height:"50px",width:'auto'}}></div>
        </div>
        <div >
          <Footer/>
        </div>
        
      </div>
  );
}



export default App;
