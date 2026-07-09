import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
