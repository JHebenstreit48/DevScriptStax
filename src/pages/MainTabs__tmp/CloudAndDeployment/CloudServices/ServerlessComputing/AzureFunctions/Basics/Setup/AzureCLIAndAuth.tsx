import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AzureCLIAndAuth = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/AzureFunctions/Basics/Setup/AzureCLIAndAuth';

  return (
    <>
      <PageLayout>
        <PageTitle title="Azure CLI & Auth" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AzureCLIAndAuth;
