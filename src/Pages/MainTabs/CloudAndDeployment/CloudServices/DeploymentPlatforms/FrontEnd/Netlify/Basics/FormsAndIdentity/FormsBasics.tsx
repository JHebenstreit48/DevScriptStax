import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FormsBasics = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/FormsAndIdentity/FormsBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Forms Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FormsBasics;
