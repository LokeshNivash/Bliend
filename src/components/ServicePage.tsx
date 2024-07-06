import { EuiFlexGrid, EuiFlexItem, EuiPage, EuiPageBody, EuiPageSection } from "@elastic/eui"
import { FunctionComponent } from "react"
import './ServicePage.css'
import SliderComponent from "./SliderComponent"

export interface ServicePageProps{
    size?:number
}
const ServicePage:FunctionComponent<ServicePageProps> = ({ size}) => {
    return <>
        <EuiPage  style={{ backgroundColor: 'transparent',paddingBottom:'200px' }}  id="services-section" >
            <EuiPageBody  component="div">
                <EuiFlexGrid responsive={true} columns={2} direction="row" gutterSize="none">
                    <EuiFlexItem grow={false}>
                        <EuiPageSection className="left-section">
                            <div className="box">
                                <div style={{ display: 'flex', justifyContent: 'start',alignItems:'center',paddingTop:'0' }}>
                                    <img src="/logo.png" alt="Company Logo" style={{width:'50px',height:'50px',marginRight:'10px'}} />
                                    <h2 className="title">BLIEND</h2>
                                </div>
                                <h1 className="title">WHY YOU NEED US</h1>
                                <p className="summary">
                                    we specialize in transforming brands through creativity
                                    and innovation. Our comprehensive services encompass
                                    advertising, marketing, and software solutions, tailored to
                                    meet the unique needs of each client. With a team of
                                    passionate professionals, we blend artistic vision with
                                    strategic insight to craft compelling brand identities that
                                    resonate with audiences and drive success. From concept
                                    to execution, we are dedicated to delivering exceptional
                                    results that elevate your brand and set it apart in a
                                    competitive market.                                
                                </p>
                            </div>
                        </EuiPageSection>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiPageSection className="right-section">
                            <div >
                                <h2 className="service-title">SERVICES</h2>
                                <SliderComponent autoplay={true} filename="adpage.png"/>
                            </div>
                        </EuiPageSection>
                    </EuiFlexItem>
                </EuiFlexGrid>
            </EuiPageBody>
        </EuiPage>
    </>
}

export default ServicePage