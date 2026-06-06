import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HTTPMethods = () => {
  const markdownFilePath = 'BackEnd/API/Basics/HTTPClients/Axios/HTTPMethods';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="API HTTP Clients - Axios - HTTP Methods" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HTTPMethods;