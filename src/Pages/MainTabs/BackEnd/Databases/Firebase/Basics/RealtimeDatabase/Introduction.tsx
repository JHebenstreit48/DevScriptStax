import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/RealtimeDatabase/Introduction';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="RealtimeDatabase: Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;
