import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
