import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HTTPMocking = () => {
  const markdownFilePath = 'Languages/Dart/Testing/Integration/HTTPMocking';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTTP Mocking" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HTTPMocking;
