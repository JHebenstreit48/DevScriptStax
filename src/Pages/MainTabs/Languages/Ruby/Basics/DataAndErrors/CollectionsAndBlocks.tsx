import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
