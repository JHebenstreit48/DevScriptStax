import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PushPullAndRegistry = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Basics/BuildAndRegistry/PushPullAndRegistry';

  return (
    <>
      <PageLayout>
        <PageTitle title="Push / Pull & Registry" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PushPullAndRegistry;
