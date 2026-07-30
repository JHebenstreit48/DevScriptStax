import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
