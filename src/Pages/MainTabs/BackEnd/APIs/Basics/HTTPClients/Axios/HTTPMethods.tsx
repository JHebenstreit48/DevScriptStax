import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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