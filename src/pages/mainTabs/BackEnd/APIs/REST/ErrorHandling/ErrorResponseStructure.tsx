import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
