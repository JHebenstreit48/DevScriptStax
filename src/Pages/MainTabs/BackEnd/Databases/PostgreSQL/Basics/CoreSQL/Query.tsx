import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Query = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Basics/CoreSQL/Query';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Query" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Query;
