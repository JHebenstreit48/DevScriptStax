import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PostgresOnFly = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/Databases/PostgresOnFly';

  return (
    <>
      <PageLayout>
        <PageTitle title="Postgres on Fly" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PostgresOnFly;
