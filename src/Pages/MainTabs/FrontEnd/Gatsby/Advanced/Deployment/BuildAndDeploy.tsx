import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildAndDeploy = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/Deployment/BuildAndDeploy';

  return (
    <>
      <PageLayout>
        <PageTitle title="Build & Deploy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildAndDeploy;
