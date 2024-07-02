import React, { FunctionComponent } from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiImage,
  EuiButtonIcon,
} from '@elastic/eui';
import styled from '@emotion/styled';

const backgroundImage="/background.png"

const PageContainer = styled.div`
  background: url(${backgroundImage}) no-repeat center center;
   background-size: 100%;
  height: 100vh;
  padding: 20px;
  color: white;
  border:none;
`;



const ArrowButton = styled(EuiButtonIcon)`
  margin: 0 20px;
  color: #ff69b4; /* Pink color */
`;

const AdvertisementPage: FunctionComponent = () => {
  return (
    <PageContainer>
      {/* <EuiFlexGroup justifyContent="center" alignItems="center" style={{ height: '100%' }}>
        <EuiFlexItem grow={false}>
          <ArrowButton iconType="arrowLeft" aria-label="Previous Advertisement" />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
            <EuiText>
              <h2>Advertisements</h2>
              <p>We offer a wide array of advertising services, supported by a team of highly creative...</p>
            </EuiText>
            <EuiImage
              size="l"
              hasShadow
              alt="For Advertising"
              src="path-to-your-image.png" // Update with the actual path
            />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <ArrowButton iconType="arrowRight" aria-label="Next Advertisement" />
        </EuiFlexItem>
      </EuiFlexGroup> */}
    </PageContainer>
  );
};

export default AdvertisementPage;
