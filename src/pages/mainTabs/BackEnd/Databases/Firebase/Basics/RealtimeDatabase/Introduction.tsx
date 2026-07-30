import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Introduction = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/RealtimeDatabase/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="RealtimeDatabase: Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;
