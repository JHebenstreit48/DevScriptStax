import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AOF = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/Persistence/AOF';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="AOF" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AOF;
