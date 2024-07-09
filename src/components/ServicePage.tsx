import {  EuiFlexGroup, EuiFlexItem, EuiPage, EuiPageBody, EuiPageSection } from "@elastic/eui"
import { FunctionComponent } from "react"
import SliderComponent from "./SliderComponent"
import { TypeAnimation } from 'react-type-animation';
import './ServicePage.css'

export interface ServicePageProps {
    size?: number
}
const ServicePage: FunctionComponent<ServicePageProps> = ({ size }) => {
    return <>
        <EuiPage style={{ backgroundColor: 'transparent', paddingBottom: '200px' }} 
        id="services-section"
         className="slide-fade-in">
            <EuiPageBody component="div">
                <EuiFlexGroup responsive={true} direction="row" gutterSize="none">
                    <EuiFlexItem grow={true}>
                        <EuiPageSection className="left-section">
                            <div className="box ">
                                <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', paddingTop: '0' }}>
                                    <img src="/logo_new.png" alt="Company Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} className="icon-bounce" />
                                    <h2 className="title fade-in">BLIEND</h2>
                                </div>
                                <h2 className="title">
                                    <TypeAnimation
                                        cursor={true}
                                        sequence={[
                                            'WHY YOU NEED US',
                                            2000,
                                            'WHY YOU NEED BLIEND',
                                            2000,
                                            'HERE WE GO...',
                                            2000
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Infinity}
                                    />
                                </h2>
                                <p className="summary fade-in">
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
                    <EuiFlexItem grow={true}>
                                 <div className="slider-component-wrapper">
                                <h2 className="service-title">SERVICES</h2>
                                <SliderComponent autoplay={true}  />
                                </div>
                                </EuiFlexItem>
                </EuiFlexGroup>
            </EuiPageBody>
        </EuiPage>
    </>
}

export default ServicePage