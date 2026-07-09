import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ErrorResponseStructure = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/ErrorHandling/ErrorResponseStructure';

  return (
    <>
      <PageLayout>
        <PageTitle title="Error Response Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorResponseStructure;
