import { EuiButton, EuiHeader, EuiHeaderLink, EuiHeaderSection, EuiHeaderSectionItem, EuiImage } from '@elastic/eui';
import React from 'react';
import './App.css';
import Main from './components/Main';

const App: React.FC = () => {
  return (
    <div>
      <div className="app-page">
        <EuiHeader style={{ backgroundColor: 'transparent', textDecoration: 'none', border: 'none', maxWidth: '50%', margin: 0 }}>
          <EuiHeaderSectionItem >
            <EuiImage style={{ width: '50px', height: '50px' }} src='/logo.png' alt='logo' />
          </EuiHeaderSectionItem>
          <EuiHeaderSection className="header-section">
            <EuiHeaderSectionItem>
              <EuiHeaderLink size='m' id='header-link' href="#">
                <EuiButton fill color='success'>Home</EuiButton>
              </EuiHeaderLink>
            </EuiHeaderSectionItem>
            <EuiHeaderSectionItem>
              <EuiHeaderLink href="#" id='header-link'>
                <EuiButton >Services</EuiButton>
              </EuiHeaderLink>
            </EuiHeaderSectionItem>
            <EuiHeaderSectionItem>
              <EuiHeaderLink href="#" id='header-link'>
                <EuiButton >Solutions</EuiButton>
              </EuiHeaderLink>
            </EuiHeaderSectionItem>
            <EuiHeaderSectionItem>
              <EuiHeaderLink href="#" id='header-link'>
                <EuiButton >Contact</EuiButton>
              </EuiHeaderLink>
            </EuiHeaderSectionItem>
          </EuiHeaderSection>
        </EuiHeader>

        {/* <EuiPage style={{ backgroundColor: 'transparent' }} className="page-body">
        <EuiPageBody component="div">
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiPageSection className="left-section">
                <div className="box">
                  <div  style={{display:'flex',justifyContent:'start',marginLeft:'-20px'}}>
                  <img src="/logo.png" alt="Company Logo" className="company-logo" />
                  <h2>BLIEND</h2>
                  </div>
                  <h1 style={{textAlign:'start'}}>WHY YOU NEED US</h1>
                  <p style={{ textAlign:'start'}}>
                    We specialize in transforming brands through creativity and innovation. Our comprehensive services encompass advertising, marketing, and software solutions, tailored to meet the unique needs of each client.
                  </p>
                </div>
              </EuiPageSection>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiPageSection className="right-section">
                <div style={{display:'flex'}}>
                <div className="box">
                  <h2>SERVICES</h2>
                  <img src="/system.png" alt="Services" className="services-image" />
                  <h3>Advertising</h3>
                </div>
                <div className='box' >
                <EuiIcon cursor={'pointer'} type='arrowRight' size='xl' onClick={()=>{window.location.reload()}}/>
                </div>
                </div>
              </EuiPageSection>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPageBody>
      </EuiPage> */}

        <Main />

      </div >
      {/* <div>
    <Main />
    </div> */}
    </div>
  );
}

export default App;
