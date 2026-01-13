import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CRUD = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Basics/CoreSQL/CRUD';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CRUD (SQL Statements)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CRUD;
