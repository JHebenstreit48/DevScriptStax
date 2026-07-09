import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IAMRolesAndPolicies = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/NetworkingAndSecurity/IAMRolesAndPolicies';

  return (
    <>
      <PageLayout>
        <PageTitle title="IAM Roles & Policies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IAMRolesAndPolicies;
