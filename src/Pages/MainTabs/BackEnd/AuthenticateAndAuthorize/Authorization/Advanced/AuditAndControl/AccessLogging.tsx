import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AccessLogging = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authorization/Advanced/AuditAndControl/AccessLogging';

  return (
    <>
      <PageLayout>
        <PageTitle title="Access Logging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AccessLogging;
