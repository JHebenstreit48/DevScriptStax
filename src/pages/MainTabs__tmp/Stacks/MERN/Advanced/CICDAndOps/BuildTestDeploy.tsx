import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
