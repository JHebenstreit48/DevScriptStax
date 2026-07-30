import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MultiContainerApps = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Basics/Compose/MultiContainerApps';

  return (
    <>
      <PageLayout>
        <PageTitle title="Multi-Container Apps" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MultiContainerApps;
