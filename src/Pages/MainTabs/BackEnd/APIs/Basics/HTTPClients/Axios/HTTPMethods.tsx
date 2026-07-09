import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HTTPMethods = () => {
  const markdownFilePath = 'BackEnd/API/Basics/HTTPClients/Axios/HTTPMethods';

  return (
    <>
      <PageLayout>
        <PageTitle title="API HTTP Clients - Axios - HTTP Methods" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HTTPMethods;