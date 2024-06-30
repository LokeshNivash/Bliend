import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiImage } from '@elastic/eui';

const Advertising: React.FC = () => {
  return (
    <div className="advertising-section">
      <h2>ADVERTISING</h2>
      <EuiFlexGroup justifyContent="center">
        <EuiFlexItem grow={false}>
          <EuiImage
            size="l"
            hasShadow
            alt="Billboard"
            src="/path/to/billboard.png"
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiImage
            size="l"
            hasShadow
            alt="Screen"
            src="/path/to/screen.png"
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiImage
            size="l"
            hasShadow
            alt="Flyer"
            src="/path/to/flyer.png"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
}

export default Advertising;
