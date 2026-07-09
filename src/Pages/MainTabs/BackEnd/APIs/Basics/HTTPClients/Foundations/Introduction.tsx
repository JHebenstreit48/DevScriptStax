import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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