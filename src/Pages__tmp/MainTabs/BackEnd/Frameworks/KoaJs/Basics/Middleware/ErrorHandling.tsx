import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ErrorHandling = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Basics/Middleware/ErrorHandling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Error Handling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorHandling;
