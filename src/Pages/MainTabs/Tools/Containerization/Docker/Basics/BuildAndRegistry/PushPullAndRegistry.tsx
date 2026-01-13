import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PushPullAndRegistry = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Basics/BuildAndRegistry/PushPullAndRegistry';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Push / Pull & Registry" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PushPullAndRegistry;
