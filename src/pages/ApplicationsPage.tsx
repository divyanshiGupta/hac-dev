import React from 'react';
import { Helmet } from 'react-helmet';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';
import ApplicationDetailsView from '../components/ApplicationDetailsView/ApplicationDetailsView';
import ApplicationListView from '../components/ApplicationListView/ApplicationListView';
import NamespacedPage from '../components/NamespacedPage/NamespacedPage';
import PageLayout from '../components/PageLayout/PageLayout';
import { getQueryArgument } from '../shared/utils';

const ApplicationsPage = () => {
  const applicationName = getQueryArgument('name');

  return (
    <NamespacedPage>
      {applicationName ? (
        <React.Fragment>
          <Helmet>
            <title>Application Details Page</title>
          </Helmet>
          <ApplicationDetailsView applicationName={applicationName} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Helmet>
            <title>Application List Page</title>
          </Helmet>
          <PageLayout
            title="Applications"
            description="Applications are a set of components that run together on environments."
          >
            <PageSection
              padding={{ default: 'noPadding' }}
              variant={PageSectionVariants.light}
              isFilled
            >
              <ApplicationListView />
            </PageSection>
          </PageLayout>
        </React.Fragment>
      )}
    </NamespacedPage>
  );
};

export default ApplicationsPage;
