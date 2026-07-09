import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HashesAndBitmaps = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Basics/DataStructures/HashesAndBitmaps';

  return (
    <>
      <PageLayout>
        <PageTitle title="Hashes & Bitmaps" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HashesAndBitmaps;
