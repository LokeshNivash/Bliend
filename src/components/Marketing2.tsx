import {
    EuiFlexGroup,
    EuiFlexItem,
    EuiImage,
    EuiPage,
    EuiPageBody,
    EuiText,
    EuiTitle,
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import './Marketing2.css';

const MarketingPage2 = () => {
    const directPromotions = [
        { alt: "Sales", src: "/icons/SALES.png", text: "SALES" },
        { alt: "Contests", src: "/icons/CONTESTS.png", text: "CONTESTS" },
        { alt: "Campaigns", src: "/icons/CAMPAIGNS.png", text: "CAMPAIGNS" },
    ]
    return <>
        <EuiPage style={{ background: 'transparent' }} restrictWidth={false} hidden={true}>
            <EuiPageBody>
                {/* Header Section */}
                <EuiFlexGroup justifyContent="center" alignItems="center">
                    <EuiFlexItem grow={false}>
                        {/* <EuiTitle size="l"> */}
                        <h1 className="marketing-title">MARKETING</h1>
                        {/* </EuiTitle> */}
                    </EuiFlexItem>
                </EuiFlexGroup>

                <EuiFlexGroup justifyContent="center" alignItems="center" wrap responsive className="section-container">
                    <EuiFlexItem grow={false} className="service-item">
                        <EuiImage style={{
                            height: '600px',
                            paddingBottom: '50px',
                            width: 'auto',
                            transform: "perspective(200px) rotate3D(0, 1, 0, 10deg)"
                        }} alt="tilted-phone" src="/outdoor/OUTDOOR DISPLAY TWO.png" />
                    </EuiFlexItem>
                    <EuiFlexGroup justifyContent="center" alignItems="center" wrap responsive className="services-container">

                        <div className="digital-container">
                            <EuiText className="digital-title">
                                <h2>DIGITAL</h2>
                            </EuiText>
                            <img src="/icons/RIGHT SCROLL BUTTON.png" alt="Scroll Button" className="scroll-button" />
                        </div>
                        {[
                            { alt: "SEO", src: "/icons/SEO.png", text: "SEO" },
                            { alt: "SEM", src: "/icons/SEM.png", text: "SEM" },
                            { alt: "Content", src: "/icons/CONTENT.png", text: "CONTENT" },
                            { alt: "Social Media", src: "/icons/SOCIAL MEDIA.png", text: "SOCIAL MEDIA" },
                            { alt: "Influencers", src: "/icons/INFLUENCER.png", text: "INFLUENCERS" },
                        ].map((item, index) => (
                            <EuiFlexItem grow={false} className="service-item" key={index}>
                                <EuiImage style={{ width: '60px', height: 'auto' }} hasShadow alt={item.alt} src={item.src} />
                                <EuiText textAlign="center" className="service-text">
                                    <p>{item.text}</p>
                                </EuiText>
                            </EuiFlexItem>
                        ))}
                    </EuiFlexGroup>

                </EuiFlexGroup>

                {/* Direct Promotions Section */}
                <EuiFlexGroup justifyContent="center" alignItems="center" wrap responsive className="section-container">
                    <EuiFlexItem grow={false}  className="service-item">
                        <div className="digital-container-bottom">
                            <EuiText className="digital-title-bottom">
                                <h2>DIRECT PROMOTIONS</h2>
                            </EuiText>
                            <img src="/icons/LEFT SCROLL BUTTON.png" alt="Scroll Button" className="scroll-button" />
                        </div>

                        <EuiFlexGroup justifyContent="center" alignItems="center" className="custom-section">
                            <EuiFlexItem grow={false} className="icon-section">
                                <EuiImage
                                    src="/icons/SOCIAL MEDIA.png"
                                    alt="Icon"
                                    style={{ width: '200px', height: 'auto' }}
                                />
                            </EuiFlexItem>
                            <EuiFlexItem grow={false} className="text-section">
                                <EuiText className="list-text">
                                    <ul style={{listStyle:'none'}}>
                                        <li>SALES</li>
                                        <li>CONTESTS</li>
                                        <li>CAMPAIGNS</li>
                                    </ul>
                                </EuiText>
                        
                            </EuiFlexItem>
                        </EuiFlexGroup>



                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFlexItem grow={false} className="service-item">
                            <EuiImage id='down-img' style={{
                                height: '600px',
                                paddingBottom: '50px',
                                width: 'auto',
                                transform: "perspective(200px) rotate3D(0, -10, 20, 10deg)"
                            }} alt="tilted-phone" src="/outdoor/OUTDOOR DISPLAY TWO.png" />
                        </EuiFlexItem>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiPageBody>
        </EuiPage>
    </>
}


export default MarketingPage2;
