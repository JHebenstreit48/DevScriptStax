import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CICD = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Advanced/Workflows/CICD';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CI/CD" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CICD;
