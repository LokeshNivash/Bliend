import {
    EuiButtonIcon,
    EuiFlexGroup,
    EuiFlexItem,
    EuiFlyout,
    EuiFlyoutBody,
    EuiFlyoutHeader,
    EuiHeader,
    EuiHeaderLink,
    EuiHeaderLogo,
    useEuiMaxBreakpoint,
    useEuiMinBreakpoint
} from '@elastic/eui';
import styled from '@emotion/styled';
import { FunctionComponent, useState } from 'react';
import ScrollingHeader from './ScrollingHeader';

const HeaderComponent: FunctionComponent = () => {
    const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);

    const toggleFlyout = () => {
        setIsFlyoutVisible(!isFlyoutVisible);
    };

    const closeFlyout = () => {
        setIsFlyoutVisible(false);
    };

    const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    background-color: transparent;
    color: white;
     background-color: rgba(0,0,0,0.2);
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1));
  background-position: 0% 100%;
  background-size: 100% 200px;
  }

    ${useEuiMaxBreakpoint('m')} {
      .nav-items {
        display: none;
      }
      .login-item {
        display: none;
      }
      .menu-icon {
        display: block;
        color:red;
      }
         .logo-item{
    display:none;
  }
         .flyout {
    color: white;
  }

        .flyout .header-link {
            color: white;
            text-decoration:none;
        }
    }

    ${useEuiMinBreakpoint('m')} {
      .menu-icon {
        display: none;
      }
    }
  `;

    const HeaderLink = styled(EuiHeaderLink)`
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 10px;
    transition: color 0.3s ease;
    padding-right:10px;
    padding-left:10px;
    text-decoration:none;
    background-color:transparent;
    border:none;

  &:hover {
    background-color:rgba(143, 133, 200, 0.685);
  }
  `;

    return (
     <>
            <EuiHeader style={{ background: 'transparent',border:'none' }} position="fixed">
                <HeaderContainer>
                    <EuiFlexItem grow={false} className="menu-icon">
                        <EuiButtonIcon
                            style={{ background: 'transparent', border: 'none', color: 'white' }}
                            color='success'
                            iconType="menu"
                            aria-label="Open menu"
                            onClick={toggleFlyout}
                        />
                    </EuiFlexItem>
                    <EuiFlexItem grow={false} className="logo-item">
                        <EuiHeaderLogo className='text-pulse' iconType="/logo_new.png" ></EuiHeaderLogo>
                    </EuiFlexItem>
                    <EuiFlexItem className="nav-items">
                        <EuiFlexGroup justifyContent="spaceAround">
                            <EuiFlexItem grow={false}>
                                <HeaderLink  onClick={() => {
                                    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })
                                }} >Services</HeaderLink>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                                <HeaderLink onClick={() => {
                                    document.getElementById('advertisement-section')?.scrollIntoView({ behavior: 'smooth' })
                                }} >Advertisement</HeaderLink>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                                <HeaderLink onClick={() => {
                                    document.getElementById('marketing-section')?.scrollIntoView({ behavior: 'smooth' })
                                }}>Marketing</HeaderLink>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                                <HeaderLink onClick={() => {
                                    document.getElementById('software-solution-section')?.scrollIntoView({ behavior: 'smooth' })
                                }}>Software Solutions</HeaderLink>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                                <HeaderLink onClick={() => {
                                    document.getElementById('footer-section')?.scrollIntoView({ behavior: 'smooth' })
                                }}>Contact Us</HeaderLink>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                </HeaderContainer>
                <HeaderContainer>
                <ScrollingHeader/>
                </HeaderContainer>
            </EuiHeader>


            {isFlyoutVisible && (
                <EuiFlyout
                    ownFocus
                    onClose={closeFlyout}
                    aria-labelledby="flyoutTitle"
                    size="xs"
                    style={{ background: '#0a0a23' }}
                    className='flyout'
                    hideCloseButton
                >
                    <EuiFlyoutHeader hasBorder>
                        <EuiHeaderLogo iconType="logoElastic" ><p style={{ color: 'white' }}>Bliend</p></EuiHeaderLogo>
                    </EuiFlyoutHeader>
                    <EuiFlyoutBody>
                        <EuiFlexGroup direction="column" gutterSize="s">
                            <EuiFlexItem>
                                <EuiHeaderLink className='header-link' href="#" onClick={() => {
                                    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })
                                    closeFlyout()
                                }}>
                                    Services
                                </EuiHeaderLink>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiHeaderLink className='header-link' href="#" 
                                 onClick={() => {
                                    document.getElementById('advertisement-section')?.scrollIntoView({ behavior: 'smooth' })
                                    closeFlyout()
                                }}>
                                    Advertisement
                                </EuiHeaderLink>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiHeaderLink className='header-link' href="#" onClick={() => {
                                    document.getElementById('marketing-section')?.scrollIntoView({ behavior: 'smooth' })
                                    closeFlyout()
                                }}>
                                    Marketing
                                </EuiHeaderLink>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiHeaderLink className='header-link' href="#" onClick={() => {
                                    document.getElementById('software-solution-section')?.scrollIntoView({ behavior: 'smooth' })
                                    closeFlyout()
                                }}>
                                    Software Solutions
                                </EuiHeaderLink>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiHeaderLink className='header-link' href="#" onClick={() => {
                                    document.getElementById('footer-section')?.scrollIntoView({ behavior: 'smooth' })
                                    closeFlyout()
                                }}>
                                    Contact Us
                                </EuiHeaderLink>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiFlyoutBody>
                </EuiFlyout>
            )}
       </>
    );
};

export default HeaderComponent;
