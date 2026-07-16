import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IAMAndPolicies = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/Provisioning/AWSCDK/Advanced/Security/IAMAndPolicies';

  return (
    <>
      <PageLayout>
        <PageTitle title="IAM & Policies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IAMAndPolicies;
