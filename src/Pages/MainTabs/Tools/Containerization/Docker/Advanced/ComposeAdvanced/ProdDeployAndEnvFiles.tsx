import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProdDeployAndEnvFiles = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Advanced/ComposeAdvanced/ProdDeployAndEnvFiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Prod Deploy & Env Files" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProdDeployAndEnvFiles;
