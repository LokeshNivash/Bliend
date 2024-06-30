import { EuiPage, EuiPageBody, EuiFlexGroup, EuiFlexItem, EuiPageSection, EuiIcon, EuiImage } from "@elastic/eui"
import SliderComponent from "./SliderComponent"

const Main = () => {
    return <>
        <EuiPage  style={{ backgroundColor: 'transparent',maxWidth:'100%',overflow:'hidden'}} >
            <EuiPageBody component="div">
                <EuiFlexGroup>
                    <EuiFlexItem>
                        <EuiPageSection className="left-section">
                            <div className="box">
                                <div style={{ display: 'flex', justifyContent: 'start', marginLeft: '-20px' }}>
                                    <img src="/logo.png" alt="Company Logo" className="company-logo" />
                                    <h2 className="title">BLIEND</h2>
                                </div>
                                <h1 className="title">WHY YOU NEED US</h1>
                                <p className="summary">
                                    We specialize in transforming brands through creativity and innovation. Our comprehensive services encompass advertising, marketing, and software solutions, tailored to meet the unique needs of each client.
                                </p>
                            </div>
                        </EuiPageSection>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiPageSection className="right-section">
                            <div >

                                {/* <div className="box"> */}
                                    <h2 className="service-title">SERVICES</h2>
                                    {/* <EuiFlexGroup >
                                        <EuiFlexItem grow={true}>
                                    <EuiImage  src="/service.png" alt="Services" style={{width:'450px',height:'auto'}} />
                                    </EuiFlexItem>
                                    <EuiFlexItem grow={false}>
                                    <EuiIcon cursor={'pointer'} type='arrowRight' size='xl' onClick={() => { window.location.reload() }} />
                                    </EuiFlexItem>
                                    </EuiFlexGroup> */}
                                    <SliderComponent />
                                {/* </div> */}
                            </div>

                        </EuiPageSection>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiPageBody>
        </EuiPage>
    </>
}

export default Main