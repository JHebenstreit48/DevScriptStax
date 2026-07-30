import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const APIRequests = () => {
  const markdownFilePath = 'Languages/Python/Intermediate/FileAndData/APIRequests';

  return (
    <>
      <PageLayout>
        <PageTitle title="API Requests" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIRequests;
