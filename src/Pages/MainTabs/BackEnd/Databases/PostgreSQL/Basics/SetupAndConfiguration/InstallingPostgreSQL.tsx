import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InstallingPostgreSQL = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Basics/SetupAndConfiguration/Installing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Installing PostgreSQL" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallingPostgreSQL;
