import { EuiFlexGroup, EuiFlexItem, EuiImage, EuiPage, EuiPageBody, EuiPageSection, EuiTitle } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import './Advertising.css';
import SliderComponent from './SliderComponent';

const AdvertisingPage = () => (
  <>
  <EuiPage restrictWidth={false} hidden={true}>
    <EuiPageBody>
      
    <div className="header">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" transform='rotate(180)' style={{ minWidth: '100%' }}>
        <path fill="url(#grad1)" fillOpacity="1" d="M0,192L48,165.3C96,139,192,85,288,96C384,107,480,181,576,181.3C672,181,768,107,864,101.3C960,96,1056,160,1152,176C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{
              stopColor: "rgba(2,74,174,0.9842787456779587)",
              stopOpacity: '1'
            }} />
            <stop offset="100%" style={{
              stopColor: 'rgba(132,23,236,0.9394608185070903)',
              stopOpacity: '1'
            }} />
          </linearGradient>
        </defs>
      </svg>


    </div >
    <EuiFlexGroup id='advertisement-section'>
      <EuiFlexItem grow={true} className='leftbox'>
        <h1 className="ad-title">ADVERTISEMENTS</h1>
        <p className="ad-summary">
          We offer a wide array of
          advertising services, supported by
          a team of highly creative
          2
          professionals dedicated to
          enhancing our advertising
          endeavors.
        </p>
      </EuiFlexItem>
      <EuiFlexItem grow={false} className='billboard'>
        <EuiPageSection className="right-section">
          <div >
            <h2 className="traditional-ad-title">TRADITIONAL ADVERTISING</h2>
            <SliderComponent autoplay={true} filename="adpage.png" />
          </div>
        </EuiPageSection>

      </EuiFlexItem>
    </EuiFlexGroup>

    <div style={{ marginTop: '150px',marginBottom:'0' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 70 1340 270" transform='rotate(180)' style={{ width: '100%' }}>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{
              stopColor: '#0000ff',
              stopOpacity: '1'
            }} />
            <stop offset="100%" style={{
              stopColor: "#800080", 
              stopOpacity: '1'
            }} />
          </linearGradient>
        </defs>
        <path fill="url(#grad1)" fillOpacity="1" d="M0,256L80,234.7C160,213,320,171,480,138.7C640,107,800,85,960,101.3C1120,117,1280,171,1360,197.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
    </div>

  </EuiPageBody>
  </EuiPage>
  </>
);

export default AdvertisingPage