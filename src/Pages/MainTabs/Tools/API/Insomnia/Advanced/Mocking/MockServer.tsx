import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MockServer = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Advanced/Mocking/MockServer';

  return (
    <>
      <PageLayout>
        <PageTitle title="Mock Server" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MockServer;
