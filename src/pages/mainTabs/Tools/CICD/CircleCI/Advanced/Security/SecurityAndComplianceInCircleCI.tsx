import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
