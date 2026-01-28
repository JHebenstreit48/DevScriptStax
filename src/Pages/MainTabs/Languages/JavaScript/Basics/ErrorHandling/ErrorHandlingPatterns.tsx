import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ErrorHandlingPatterns = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/ErrorHandling/ErrorHandlingPatterns';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Error Handling Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorHandlingPatterns;
