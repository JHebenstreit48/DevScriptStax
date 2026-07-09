import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BuildRequests = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Basics/Requests/BuildRequests';

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
