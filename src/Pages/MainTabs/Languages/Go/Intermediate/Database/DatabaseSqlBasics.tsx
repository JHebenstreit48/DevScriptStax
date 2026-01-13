import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DatabaseSqlBasics = () => {
  const markdownFilePath = 'Languages/Go/Intermediate/Database/DatabaseSqlBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="database/sql Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DatabaseSqlBasics;
