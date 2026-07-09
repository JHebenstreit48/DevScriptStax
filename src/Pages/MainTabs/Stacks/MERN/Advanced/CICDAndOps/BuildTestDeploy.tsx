import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildTestDeploy = () => {
  const markdownFilePath = 'Stacks/MERN/Advanced/CICDAndOps/BuildTestDeploy';

  return (
    <>
      <PageLayout>
        <PageTitle title="Build/Test/Deploy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildTestDeploy;
