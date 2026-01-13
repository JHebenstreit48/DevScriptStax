import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomDomain = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Setup/CustomDomain';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Custom Domain" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomDomain;
