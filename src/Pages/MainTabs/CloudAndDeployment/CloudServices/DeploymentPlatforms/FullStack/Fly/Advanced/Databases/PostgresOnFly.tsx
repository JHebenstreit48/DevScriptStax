import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
