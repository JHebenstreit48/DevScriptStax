import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ErrorBoundaries = () => {
  const markdownFilePath = 'FrontEnd/React/Advanced/PerformanceAndRendering/ErrorBoundaries';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Error Boundaries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorBoundaries;
