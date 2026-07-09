import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Credentials = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics/Setup/Credentials';

  return (
    <>
      <PageLayout>
        <PageTitle title="Credentials" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Credentials;
