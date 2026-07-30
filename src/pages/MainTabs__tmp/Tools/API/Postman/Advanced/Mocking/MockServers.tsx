import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MockServers = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Advanced/Mocking/MockServers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Mock Servers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MockServers;
