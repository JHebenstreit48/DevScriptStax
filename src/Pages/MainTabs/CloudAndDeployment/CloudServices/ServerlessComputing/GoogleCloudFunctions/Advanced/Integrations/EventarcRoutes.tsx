import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EventarcRoutes = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/Integrations/EventarcRoutes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Eventarc Routes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventarcRoutes;
