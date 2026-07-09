import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CollectionsAndBlocks = () => {
  const markdownFilePath = 'Languages/Ruby/Basics/DataAndErrors/CollectionsAndBlocks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Collections & Blocks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CollectionsAndBlocks;
