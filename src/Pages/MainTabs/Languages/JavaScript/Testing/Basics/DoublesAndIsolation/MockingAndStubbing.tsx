import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MockingAndStubbing = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Basics/DoublesAndIsolation/MockingAndStubbing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Mocking & Stubbing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MockingAndStubbing;
