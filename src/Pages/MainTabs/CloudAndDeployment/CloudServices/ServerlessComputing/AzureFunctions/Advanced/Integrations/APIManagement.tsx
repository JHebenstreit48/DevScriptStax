import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const APIManagement = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced/Integrations/APIManagement';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="API Management" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIManagement;
