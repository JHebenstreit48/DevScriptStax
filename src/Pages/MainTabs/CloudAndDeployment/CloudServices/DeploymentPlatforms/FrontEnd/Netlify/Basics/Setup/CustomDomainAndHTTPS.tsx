import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CustomDomainAndHTTPS = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Basics/Setup/CustomDomainAndHTTPS';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Domain & HTTPS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomDomainAndHTTPS;
