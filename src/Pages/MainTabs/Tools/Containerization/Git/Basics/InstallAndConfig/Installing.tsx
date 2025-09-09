import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Installing = () => {
  const markdownFilePath = 'ToolsNotes/Containerization/GitNotes/Basics/InstallAndConfig/Installing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Git - Installing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Installing;