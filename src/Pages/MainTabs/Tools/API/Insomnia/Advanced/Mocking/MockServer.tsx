import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
