import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
