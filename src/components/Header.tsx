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
    EuiImage,
    EuiText,
    useEuiMaxBreakpoint,
    useEuiMinBreakpoint
} from '@elastic/eui';
import styled from '@emotion/styled';
import { FunctionComponent, useState } from 'react';
import './Header.css';

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
    background-color: #0a0a23;
    color: white;

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
         .flyout {
    color: white;
  }

        .flyout .header-link {
            color: white;
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

  &:hover {
    background-color:rgba(143, 133, 200, 0.685);
  }
  `;

    return (
        <>
            <EuiHeader style={{ background: '#0a0a23' }} position="fixed" className="custom-headcxer">
                <HeaderContainer>
                    <EuiFlexItem grow={false} className="menu-icon">
                        <EuiButtonIcon
                        style={{ background:'transparent',border:'none',color:'white'}}
                            color='success'
                            iconType="menu"
                            aria-label="Open menu"
                            onClick={toggleFlyout}
                        />
                    </EuiFlexItem>
                    <EuiFlexItem grow={false} className="logo-item">
                        <EuiHeaderLogo iconType="logoElastic"><p style={{ color: 'white' }}>Bliend</p></EuiHeaderLogo>
                    </EuiFlexItem>
                    <EuiFlexItem className="nav-items">
                        <EuiFlexGroup justifyContent="spaceAround">
                            <EuiFlexItem grow={false}>
                                <HeaderLink href="#">Services</HeaderLink>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                                <HeaderLink href="#">Solutions</HeaderLink>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                                <HeaderLink href="#">Marketing</HeaderLink>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                                <HeaderLink href="#">Contact Us</HeaderLink>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiFlexItem>

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
                        <EuiHeaderLogo  iconType="logoElastic" ><p style={{color:'white'}}>Bliend</p></EuiHeaderLogo>
                    </EuiFlyoutHeader>
                    <EuiFlyoutBody>
                        <EuiFlexGroup direction="column" gutterSize="s">
                            <EuiFlexItem>
                                <EuiHeaderLink className='header-link' href="#" onClick={closeFlyout}>
                                    Services
                                </EuiHeaderLink>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiHeaderLink className='header-link' href="#" onClick={closeFlyout}>
                                    Solutions
                                </EuiHeaderLink>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiHeaderLink className='header-link' href="#" onClick={closeFlyout}>
                                    Marketing
                                </EuiHeaderLink>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiHeaderLink className='header-link' href="#" onClick={closeFlyout}>
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
