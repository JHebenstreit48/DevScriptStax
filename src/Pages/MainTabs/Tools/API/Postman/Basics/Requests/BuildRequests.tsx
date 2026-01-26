import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildRequests = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Basics/Requests/BuildRequests';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Build Requests" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildRequests;
