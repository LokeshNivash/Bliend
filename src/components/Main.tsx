import { EuiPage, EuiPageBody, EuiFlexGroup, EuiFlexItem, EuiPageSection, EuiIcon, EuiImage } from "@elastic/eui"
import SliderComponent from "./SliderComponent"

const Main = () => {
    return <>
        <EuiPage style={{ backgroundColor: 'transparent', maxWidth: '100%', overflow: 'hidden' }} >
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
                                <SliderComponent />
                            </div>

                        </EuiPageSection>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiPageBody>
        </EuiPage>
    </>
}

export default Main