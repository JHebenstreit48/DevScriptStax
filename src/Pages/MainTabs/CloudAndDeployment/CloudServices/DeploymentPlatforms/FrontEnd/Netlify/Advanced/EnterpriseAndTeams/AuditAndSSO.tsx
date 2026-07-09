import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AuditAndSSO = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Advanced/EnterpriseAndTeams/AuditAndSSO';

  return (
    <>
      <PageLayout>
        <PageTitle title="Audit & SSO" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AuditAndSSO;
