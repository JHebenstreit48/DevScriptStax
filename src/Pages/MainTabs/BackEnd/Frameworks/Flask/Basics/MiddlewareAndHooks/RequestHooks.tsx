import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RequestHooks = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Basics/MiddlewareAndHooks/RequestHooks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Request Hooks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RequestHooks;
