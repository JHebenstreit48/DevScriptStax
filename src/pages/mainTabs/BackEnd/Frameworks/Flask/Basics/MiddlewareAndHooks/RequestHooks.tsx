import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
