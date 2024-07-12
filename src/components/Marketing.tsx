import { EuiFlexGroup, EuiFlexItem, EuiImage, EuiPage, EuiPageBody } from "@elastic/eui"
import './Marketing.css'

const MarketingPage = () => {
    const digitalIcons=[
        { alt: "SEO", src: "/webp-icons/SEO.webp", text: "SEO" },
        { alt: "SEM", src: "/webp-icons/SEM.webp", text: "SEM" },
        { alt: "Content", src: "/webp-icons/CONTENT.webp", text: "CONTENT" },
        { alt: "Social Media", src: "/webp-icons/SOCIAL MEDIA.webp", text: "SOCIAL MEDIA" },
        { alt: "Influencers", src: "/webp-icons/INFLUENCER.webp", text: "INFLUENCERS" },
    ]
    return <>
        <EuiPage style={{ background: 'transparent', overflow: 'hidden' }}>
            <EuiPageBody id="marketing-section">
                <EuiFlexGroup  justifyContent="center" alignItems="center" responsive wrap>
                    <EuiFlexItem grow={false}>
                        <h2 className="marketing-mobile-title" style={{fontSize:'5vw',textAlign:'center'}}>MARKETING</h2>
                        <div>
                            <EuiImage style={{
                                paddingBottom: '50px',
                                width: 'auto',
                                maxHeight:"650px",
                                margin: '0 auto',
                                transform: "perspective(200px) rotate3D(0, 1, 0, 10deg)"
                            }} alt="tilted-phone" src="/webp-outdoor/OUTDOOR DISPLAY TWO.webp" />
                        </div>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <div className="marketing-section">
                            <h2>MARKETING</h2>
                            <p>Software development is the heart of modern innovation, transforming creative ideas into dynamic digital experiences. It enables the creation of customized solutions that cater to unique business needs, enhancing efficiency and user engagement. By integrating cutting-edge technologies, software development empowers brands to stay ahead in a competitive market. It also fosters collaboration, allowing creative minds to bring their visions to life through seamless integration. Ultimately, it drives the future of digital creativity, blending technical expertise with artistic expression.</p>
                        </div>
                        <div className="digital-scroll">
                            <h2>Digital</h2>
                            <EuiImage style={{
                                height: '100px',
                                width: 'auto',
                                margin: '0 auto',
                            }} alt="Scroll Button"
                                src="/webp-icons/RIGHT SCROLL BUTTON.webp" />
                        </div>
                        <EuiFlexGroup responsive wrap className="social-contents">
                            {digitalIcons.map((item, index) => (
                                <EuiFlexItem grow={false} key={index}>
                                    <EuiImage style={{ width: '60px', height: 'auto' }}
                                        hasShadow
                                        alt={item.alt} src={item.src} />
                                    <p style={{ textAlign: 'center' }}>{item.text}</p>
                                </EuiFlexItem>
                            ))}
                        </EuiFlexGroup>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiPageBody>
        </EuiPage>
        <EuiPage style={{ background: 'transparent', overflow: 'hidden' }}>
            <EuiPageBody>
                <EuiFlexGroup justifyContent="center" alignItems="center" responsive wrap>
                    <EuiFlexItem>
                        <div className="digital-scroll">
                            <h2>DIRECT PROMOTIOS</h2>
                            <EuiImage style={{
                                height: '100px',
                                width: 'auto',
                                margin: '0 auto',
                            }} alt="Scroll Button"
                                src="/webp-icons/RIGHT SCROLL BUTTON.webp" />
                        </div>

                        <div className="responsive-container">
                            <EuiImage
                                src="/webp-icons/SOCIAL MEDIA.webp"
                                alt="Icon"
                                style={{ width: '200px', height: 'auto', flex: '0 0 auto' }}
                            />
                            <div className="list-items" style={{ flex: '1 1 auto', paddingLeft: '16px' }}>
                                <ul>
                                    <li>SALES</li>
                                    <li>CONTESTS</li>
                                    <li>CAMPAIGNS</li>
                                </ul>
                            </div>
                        </div>

                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <div style={{alignItems:'end',paddingRight:'150px'}}>
                            <EuiImage style={{
                                paddingBottom: '50px',
                                maxHeight:"650px",
                                width: 'auto',
                                margin: '0 auto',
                                transform: "perspective(200px) rotate3D(0, -10, 20, 20deg)"
                            }} alt="tilted-phone" src="/webp-outdoor/OUTDOOR DISPLAY TWO.webp" />
                        </div>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiPageBody>
        </EuiPage>
    </>
}

export default MarketingPage