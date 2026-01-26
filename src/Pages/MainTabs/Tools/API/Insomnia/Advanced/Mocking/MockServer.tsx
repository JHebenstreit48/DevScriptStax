import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MockServer = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Advanced/Mocking/MockServer';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Mock Server" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MockServer;
