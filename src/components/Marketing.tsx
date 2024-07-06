import { EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiPage, EuiPageBody, EuiText, EuiTitle } from "@elastic/eui"
import './Marketing.css'
import '@elastic/eui/dist/eui_theme_light.css';

const MarketingPage = () => {
    return <>
        <EuiPage style={{ background: 'transparent' }}>
            <EuiPageBody id='marketing-section'>
                <EuiFlexGroup >
                    <EuiFlexItem className="left-section-1">
                        <div className="image-wrapper">
                            <EuiImage style={{
                                height: '600px',
                                paddingBottom: '50px',
                                width: 'auto',
                                // transform: "perspective(200px) rotate3D(0, 1, 0, 10deg)"
                            }} alt="tilted-phone" src="/outdoor/OUTDOOR DISPLAY TWO.png" />
                        </div>
                    </EuiFlexItem>

                    <EuiFlexItem >
                        <div className="marketing-title" >
                            <h1>MARKETING</h1>
                        </div>

                        <div style={{ paddingTop: '200px'}}>

                            <div className="container">
                                <div className="text">
                                    <h1>DIGITAL</h1>
                                </div>
                                <div className="image">
                                <EuiImage style={{ width: '50px', height: 'auto' }} src="/icons/RIGHT SCROLL BUTTON.png" alt="" />
                                </div>
                            </div>

                            <EuiFlexGroup direction="column"  wrap responsive className="services-container">
                                <EuiFlexItem grow={false} className="service-item">
                                    <EuiImage
                                        style={{ width: '60px', height: 'auto' }}
                                        // size="s"
                                        hasShadow
                                        alt="SEO"
                                        src={"/icons/SEO.png"}
                                    />
                                    <EuiText textAlign="center" className="service-text">
                                        <p>SEO</p>
                                    </EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={false} className="service-item">
                                    <EuiImage
                                        style={{ width: '60px', height: 'auto' }}
                                        // size="s"
                                        hasShadow
                                        alt="SEM"
                                        src={"/icons/SEM.png"}
                                    />
                                    <EuiText textAlign="center" className="service-text">
                                        <p>SEM</p>
                                    </EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={false} className="service-item">
                                    <EuiImage
                                        style={{ width: '60px', height: 'auto' }}
                                        // size="s"
                                        hasShadow
                                        alt="Content"
                                        src={"/icons/CONTENT.png"}
                                    />
                                    <EuiText textAlign="center" className="service-text">
                                        <p>CONTENT</p>
                                    </EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={false} className="service-item">
                                    <EuiImage
                                        style={{ width: '60px', height: 'auto' }}
                                        // size="s"
                                        hasShadow
                                        alt="Social Media"
                                        src={"/icons/SOCIAL MEDIA.png"}
                                    />
                                    <EuiText textAlign="center" className="service-text">
                                        <p>SOCIAL MEDIA</p>
                                    </EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={false} className="service-item">
                                    <EuiImage
                                        style={{ width: '60px', height: 'auto' }}
                                        // size="s"
                                        hasShadow
                                        alt="Influencers"
                                        src={"/icons/INFLUENCER.png"}
                                    />
                                    <EuiText textAlign="center" className="service-text">
                                        <p>INFLUENCERS</p>
                                    </EuiText>
                                </EuiFlexItem>
                            </EuiFlexGroup>

                        </div>
                    </EuiFlexItem>
                    
                </EuiFlexGroup>
            </EuiPageBody>
        </EuiPage>
    </>
}

export default MarketingPage