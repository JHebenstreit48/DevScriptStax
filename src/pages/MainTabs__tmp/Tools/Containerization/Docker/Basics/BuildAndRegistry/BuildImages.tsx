import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BuildImages = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Basics/BuildAndRegistry/BuildImages';

  return (
    <>
      <PageLayout>
        <PageTitle title="Build Images" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildImages;
