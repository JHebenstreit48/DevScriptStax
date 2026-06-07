import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ErrorHandling = () => {
  const markdownFilePath = 'BackEnd/API/Basics/HTTPClients/Axios/ErrorHandling';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="API HTTP Clients - Axios - Error Handling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorHandling;