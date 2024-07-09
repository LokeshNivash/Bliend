import {
    EuiFlexGroup,
    EuiFlexItem,
    EuiIcon,
    EuiLink,
    EuiSpacer,
    EuiText,
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import './FooterPage.css';

const Footer = () => {
    return (
        <div className="footer">
            <EuiFlexGroup id='footer-section' responsive wrap alignItems="center" justifyContent="spaceBetween">
                <EuiFlexItem grow={false} >
                    <div className='footer-logo-item'>
                    <img src="/logo_new.png" alt="Company Logo" className="footer-logo" />
                    </div>
                </EuiFlexItem>

                <EuiFlexItem grow={false} className='footer-nav'>
                    <EuiFlexGroup>
                        <EuiFlexItem grow={false}>
                            <EuiText >
                                <EuiLink href="#" className="footer-link">Home</EuiLink>
                            </EuiText>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>

                            <EuiText>
                                <EuiLink href="#" className="footer-link">Services</EuiLink>
                            </EuiText>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>

                            <EuiText>
                                <EuiLink href="#" className="footer-link">Solutions</EuiLink>
                            </EuiText>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>

                            <EuiText>
                                <EuiLink href="/contact" className="footer-link">Contact</EuiLink>
                            </EuiText>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>

                <EuiFlexItem grow={false} >
                    <EuiFlexGroup responsive  justifyContent='center'>
                    <div className="footer-social">
                        <EuiFlexItem grow={false}>
                            <EuiLink href="/services" className="footer-link">
                                <EuiIcon type="/brandLogos/facebook.png" size="xl" />
                            </EuiLink>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiLink href="/services" className="footer-link">
                                <EuiIcon type="/brandLogos/twitter.png" size="xl" />
                            </EuiLink>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiLink href="/services" className="footer-link">
                                <EuiIcon type="/brandLogos/linkedin.png" size="xl" />
                            </EuiLink>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiLink href="/services" className="footer-link">
                                <EuiIcon type="/brandLogos/instagram.png" size="xl" />
                            </EuiLink>
                        </EuiFlexItem>
                        </div>
                    </EuiFlexGroup>
                </EuiFlexItem>

                <EuiFlexItem grow={false} className="footer-contact">
                    <EuiText>
                        <strong>Contact Us:</strong>
                        <br />
                        <EuiLink href="mailto:info@company.com" className="footer-link">info@company.com</EuiLink>
                        <br />
                        <EuiLink href="tel:+1234567890" className="footer-link">+1 234 567 890</EuiLink>
                    </EuiText>
                </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer size='l'/>
        </div>
    );
};

export default Footer;
