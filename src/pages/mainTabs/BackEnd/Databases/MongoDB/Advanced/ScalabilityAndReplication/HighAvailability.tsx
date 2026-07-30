import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HighAvailability = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/ScalabilityAndReplication/HighAvailability';

  return (
    <>
      <PageLayout>
        <PageTitle title="High Availability" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HighAvailability;
