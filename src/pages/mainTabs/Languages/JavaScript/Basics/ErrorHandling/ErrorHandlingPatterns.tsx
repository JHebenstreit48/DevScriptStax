import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ErrorHandlingPatterns = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/ErrorHandling/ErrorHandlingPatterns';

  return (
    <>
      <PageLayout>
        <PageTitle title="Error Handling Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorHandlingPatterns;
