import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Interceptors = () => {
  const markdownFilePath = 'BackEnd/API/Basics/HTTPClients/Axios/Interceptors';

  return (
    <>
      <PageLayout>
        <PageTitle title="API HTTP Clients - Axios - Interceptors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Interceptors;