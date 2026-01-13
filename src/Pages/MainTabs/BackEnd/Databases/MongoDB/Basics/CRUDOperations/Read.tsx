import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Read = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/CRUDOperations/Read';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Read" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Read;
