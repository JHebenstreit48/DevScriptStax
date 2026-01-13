import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MockServers = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Advanced/Mocking/MockServers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Mock Servers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MockServers;
