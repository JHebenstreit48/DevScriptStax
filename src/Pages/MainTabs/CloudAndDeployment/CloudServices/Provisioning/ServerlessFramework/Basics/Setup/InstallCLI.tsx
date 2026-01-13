import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InstallCLI = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics/Setup/InstallCLI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Install CLI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallCLI;
