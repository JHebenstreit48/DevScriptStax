import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WSGIMiddleware = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Basics/MiddlewareAndHooks/WSGIMiddleware';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="WSGI Middleware" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WSGIMiddleware;
