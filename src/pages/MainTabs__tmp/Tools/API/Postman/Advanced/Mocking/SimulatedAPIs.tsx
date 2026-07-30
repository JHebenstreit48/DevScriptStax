import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
