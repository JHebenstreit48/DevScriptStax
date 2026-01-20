import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RepoLayouts = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Advanced/Monorepos/RepoLayouts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Repo Layouts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RepoLayouts;
