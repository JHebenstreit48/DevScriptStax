import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ErrorHandling = () => {
  const markdownFilePath = 'BackEnd/API/Basics/HTTPClients/Axios/ErrorHandling';

  return (
    <>
      <PageLayout>
        <PageTitle title="API HTTP Clients - Axios - Error Handling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorHandling;