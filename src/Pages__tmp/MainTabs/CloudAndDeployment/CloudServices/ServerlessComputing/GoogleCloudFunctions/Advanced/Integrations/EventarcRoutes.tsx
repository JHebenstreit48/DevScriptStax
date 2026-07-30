import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EventarcRoutes = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/Integrations/EventarcRoutes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Eventarc Routes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventarcRoutes;
