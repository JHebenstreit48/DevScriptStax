import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Configuration = () => {
  const markdownFilePath = 'BackEnd/API/Basics/HTTPClients/Axios/Configuration';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="API HTTP Clients - Axios - Configuration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Configuration;