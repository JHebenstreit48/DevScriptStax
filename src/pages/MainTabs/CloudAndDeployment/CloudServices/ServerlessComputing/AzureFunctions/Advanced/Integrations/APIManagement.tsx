import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const APIManagement = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/AzureFunctions/Advanced/Integrations/APIManagement';

  return (
    <>
      <PageLayout>
        <PageTitle title="API Management" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIManagement;
