import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CICD = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/Workflows/CICD';

  return (
    <>
      <PageLayout>
        <PageTitle title="CI/CD" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CICD;
