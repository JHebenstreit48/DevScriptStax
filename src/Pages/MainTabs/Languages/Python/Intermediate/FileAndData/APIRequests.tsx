import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const APIRequests = () => {
  const markdownFilePath = 'Languages/Python/Intermediate/FileAndData/APIRequests';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="API Requests" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIRequests;
