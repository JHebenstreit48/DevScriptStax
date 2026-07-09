import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LoggingMiddleware = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/Observability/LoggingMiddleware';

  return (
    <>
      <PageLayout>
        <PageTitle title="Logging Middleware" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LoggingMiddleware;
