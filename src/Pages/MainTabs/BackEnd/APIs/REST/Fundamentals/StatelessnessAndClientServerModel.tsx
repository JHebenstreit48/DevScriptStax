import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StatelessnessAndClientServerModel = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/Fundamentals/StatelessnessAndClientServerModel';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Statelessness & Client-Server Model" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StatelessnessAndClientServerModel;
