import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SetsAndSortedSets = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Basics/DataStructures/SetsAndSortedSets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Sets & Sorted Sets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SetsAndSortedSets;
