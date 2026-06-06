import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Interceptors = () => {
  const markdownFilePath = 'BackEnd/API/Basics/HTTPClients/Axios/Interceptors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="API HTTP Clients - Axios - Interceptors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Interceptors;