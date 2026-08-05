import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
