import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CRUD = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Basics/CoreSQL/CRUD';

  return (
    <>
      <PageLayout>
        <PageTitle title="CRUD (SQL Statements)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CRUD;
