import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
