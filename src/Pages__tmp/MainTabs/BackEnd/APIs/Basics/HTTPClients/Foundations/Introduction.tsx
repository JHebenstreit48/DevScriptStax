import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Introduction = () => {
  const markdownFilePath = 'BackEnd/API/Basics/HTTPClients/Foundations/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="API HTTP Clients - Foundations - Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;