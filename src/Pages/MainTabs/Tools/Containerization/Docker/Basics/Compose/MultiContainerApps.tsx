import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
