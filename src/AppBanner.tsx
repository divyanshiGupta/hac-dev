import React from 'react';
import { Banner, Button, Popover } from '@patternfly/react-core';

import './AppBanner.scss';

const AppBanner: React.FC = () => {
  return (
    <Banner variant="info" className="hacDev-banner" isSticky>
      <Popover
        position="bottom"
        bodyContent={
          <div>
            Development preview releases provide early access to a limited set of features that
            might not be fully tested. Users should not use development preview software in
            production or for business-critical workloads. You have 1 workspace available for
            development preview.
          </div>
        }
      >
        <Button variant="link" isInline>
          Development Preview
        </Button>
      </Popover>
    </Banner>
  );
};

export default AppBanner;
