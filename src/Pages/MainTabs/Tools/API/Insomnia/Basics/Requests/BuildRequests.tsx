import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildRequests = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Basics/Requests/BuildRequests';

  return (
    <>
      <PageLayout>
        <PageTitle title="Build Requests" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildRequests;
