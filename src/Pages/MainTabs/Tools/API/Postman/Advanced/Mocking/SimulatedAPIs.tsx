import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SimulatedAPIs = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Advanced/Mocking/SimulatedAPIs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Simulated APIs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SimulatedAPIs;
