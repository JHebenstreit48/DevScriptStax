import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PropertyManagerAPI = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/Integrations/PropertyManagerAPI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Property Manager API" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PropertyManagerAPI;
