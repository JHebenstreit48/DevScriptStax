import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ClientServerModel = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Basics/Fundamentals/ClientServerModel';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Client–Server Model" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ClientServerModel;
