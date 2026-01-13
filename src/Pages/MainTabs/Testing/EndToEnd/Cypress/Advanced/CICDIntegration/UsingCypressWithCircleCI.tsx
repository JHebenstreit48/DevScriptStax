import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UsingCypressWithCircleCI = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Advanced/CICDIntegration/UsingCypressWithCircleCI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Using Cypress with CircleCI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UsingCypressWithCircleCI;
