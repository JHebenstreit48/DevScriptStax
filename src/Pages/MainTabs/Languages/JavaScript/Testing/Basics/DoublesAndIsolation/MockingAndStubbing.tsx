import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MockingAndStubbing = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Basics/DoublesAndIsolation/MockingAndStubbing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Mocking & Stubbing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MockingAndStubbing;
