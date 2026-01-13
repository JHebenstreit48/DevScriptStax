import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ServerlessYml = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics/Projects/ServerlessYml';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="serverless.yml" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ServerlessYml;
