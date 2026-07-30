import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ErrorBoundaries = () => {
  const markdownFilePath = 'FrontEnd/React/Advanced/PerformanceAndRendering/ErrorBoundaries';

  return (
    <>
      <PageLayout>
        <PageTitle title="Error Boundaries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorBoundaries;
