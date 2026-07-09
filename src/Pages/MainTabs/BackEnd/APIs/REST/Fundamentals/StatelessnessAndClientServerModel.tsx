import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StatelessnessAndClientServerModel = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/Fundamentals/StatelessnessAndClientServerModel';

  return (
    <>
      <PageLayout>
        <PageTitle title="Statelessness & Client-Server Model" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StatelessnessAndClientServerModel;
