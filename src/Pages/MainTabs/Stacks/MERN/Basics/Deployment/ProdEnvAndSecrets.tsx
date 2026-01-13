import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProdEnvAndSecrets = () => {
  const markdownFilePath = 'Stacks/MERN/Basics/Deployment/ProdEnvAndSecrets';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Prod Env & Secrets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProdEnvAndSecrets;
