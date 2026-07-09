import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
