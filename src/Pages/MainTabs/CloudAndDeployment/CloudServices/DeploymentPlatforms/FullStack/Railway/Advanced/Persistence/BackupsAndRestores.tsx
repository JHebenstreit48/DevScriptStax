import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BackupsAndRestores = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/Persistence/BackupsAndRestores';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Backups & Restores" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BackupsAndRestores;
