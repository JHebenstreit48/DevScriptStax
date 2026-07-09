import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SecurityAndComplianceInCircleCI = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Advanced/Security/SecurityAndComplianceInCircleCI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Security & Compliance in CircleCI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityAndComplianceInCircleCI;
