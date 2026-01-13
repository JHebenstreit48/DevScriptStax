import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StructureAndNaming = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Basics/Authoring/StructureAndNaming';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Structure & Naming" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StructureAndNaming;
