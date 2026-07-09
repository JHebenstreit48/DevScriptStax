import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AuditAndSSO = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Advanced/TeamsAndSSO/AuditAndSSO';

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
