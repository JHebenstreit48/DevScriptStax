import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildImages = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Basics/BuildAndRegistry/BuildImages';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Build Images" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildImages;
