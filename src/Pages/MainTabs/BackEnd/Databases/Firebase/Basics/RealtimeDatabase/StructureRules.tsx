import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StructureRules = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/RealtimeDatabase/StructureRules';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Structure/Rules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StructureRules;
