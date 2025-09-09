import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Common = () => {
  const markdownFilePath = 'ToolsNotes/Containerization/GitNotes/Basics/Commands/Common';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Git Commands - Common" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Common;