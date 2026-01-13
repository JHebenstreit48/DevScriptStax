import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FormsBasics = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Basics/FormsAndIdentity/FormsBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Forms Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FormsBasics;
