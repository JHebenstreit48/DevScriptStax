import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
