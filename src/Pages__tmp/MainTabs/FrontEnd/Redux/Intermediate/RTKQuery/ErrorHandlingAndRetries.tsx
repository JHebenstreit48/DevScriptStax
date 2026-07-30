import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ErrorHandlingAndRetries = () => {
  const markdownFilePath = 'FrontEnd/Redux/Intermediate/RTKQuery/ErrorHandlingAndRetries';

  return (
    <>
      <PageLayout>
        <PageTitle title="Error Handling & Retries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorHandlingAndRetries;
