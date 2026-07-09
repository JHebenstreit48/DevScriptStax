import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Configuration = () => {
  const markdownFilePath = 'BackEnd/API/Basics/HTTPClients/Axios/Configuration';

  return (
    <>
      <PageLayout>
        <PageTitle title="API HTTP Clients - Axios - Configuration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Configuration;