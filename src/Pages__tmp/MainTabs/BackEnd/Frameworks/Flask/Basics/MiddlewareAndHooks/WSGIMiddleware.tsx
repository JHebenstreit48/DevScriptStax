import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WSGIMiddleware = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Basics/MiddlewareAndHooks/WSGIMiddleware';

  return (
    <>
      <PageLayout>
        <PageTitle title="WSGI Middleware" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WSGIMiddleware;
