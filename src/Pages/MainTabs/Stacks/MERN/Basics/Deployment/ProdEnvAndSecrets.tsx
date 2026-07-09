import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProdEnvAndSecrets = () => {
  const markdownFilePath = 'Stacks/MERN/Basics/Deployment/ProdEnvAndSecrets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Prod Env & Secrets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProdEnvAndSecrets;
