import { EuiFlexGroup, EuiFlexItem, EuiPage, EuiPageBody, EuiText } from "@elastic/eui"
import './SoftwareSolutions.css'
import SliderComponent from "./SliderComponent"

const SoftwareSolutions = () => {
    return  <EuiPage style={{overflow:'hidden'}} restrictWidth={false} hidden={true}>
    <EuiPageBody>
    <div className="header" id='advertisement-section'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" transform='rotate(180)' 
      style={{ minWidth: '100%',marginTop:"-20px" }}>
        <path fill="url(#grad1)" fillOpacity="1" d="M0,192L48,165.3C96,139,192,85,288,96C384,107,480,181,576,181.3C672,181,768,107,864,101.3C960,96,1056,160,1152,176C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <defs >
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
    <EuiFlexGroup>
        <EuiFlexItem>
            <div className="title-wrapper">
            <h1 className="servie-title">SOFTWARE SOLUTIONS</h1>
            </div>
        </EuiFlexItem>
        <EuiFlexItem>
            <SliderComponent autoplay={true} needBlackIcon={true}/>
        </EuiFlexItem>
    </EuiFlexGroup>
    <div className="software-solution-footer"></div>
    </EuiPageBody>
    </EuiPage>
}

export default SoftwareSolutions