import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
