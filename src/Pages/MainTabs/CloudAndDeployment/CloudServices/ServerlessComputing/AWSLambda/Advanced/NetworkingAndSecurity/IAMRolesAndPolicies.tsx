import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IAMRolesAndPolicies = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/NetworkingAndSecurity/IAMRolesAndPolicies';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="IAM Roles & Policies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IAMRolesAndPolicies;
