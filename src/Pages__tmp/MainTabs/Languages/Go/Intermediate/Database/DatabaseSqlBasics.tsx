import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DatabaseSqlBasics = () => {
  const markdownFilePath = 'Languages/Go/Intermediate/Database/DatabaseSqlBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="database/sql Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DatabaseSqlBasics;
