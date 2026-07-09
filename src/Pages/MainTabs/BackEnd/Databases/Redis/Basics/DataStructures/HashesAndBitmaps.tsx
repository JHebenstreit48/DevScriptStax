import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
