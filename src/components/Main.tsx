import { EuiPage, EuiPageBody, EuiFlexGroup, EuiFlexItem, EuiPageSection, EuiIcon, EuiImage } from "@elastic/eui"
import SliderComponent from "./SliderComponent"
import { FunctionComponent } from "react"

export interface MainProps{
    size?:number
}
const Main:FunctionComponent<MainProps> = ({ size}) => {
    return <>
        <EuiPage style={{ backgroundColor: 'transparent', maxWidth: '100%', height:"190%", overflow: 'hidden' }}  id="services-section">
            <EuiPageBody component="div">
                <EuiFlexGroup>
                    <EuiFlexItem>
                        <EuiPageSection className="left-section">
                            <div className="box">
                                <div style={{ display: 'flex', justifyContent: 'start',alignItems:'center', marginLeft: '-20px',paddingTop:'0' }}>
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
                                    competitive market.                                </p>
                            </div>
                        </EuiPageSection>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiPageSection className="right-section">
                            <div >
                                <h2 className="service-title">SERVICES</h2>
                                <SliderComponent filename="adpage.png"/>
                            </div>
                        </EuiPageSection>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiPageBody>
        </EuiPage>
    </>
}

export default Main