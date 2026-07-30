import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const InstallCLI = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/Provisioning/ServerlessFramework/Basics/Setup/InstallCLI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Install CLI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallCLI;
