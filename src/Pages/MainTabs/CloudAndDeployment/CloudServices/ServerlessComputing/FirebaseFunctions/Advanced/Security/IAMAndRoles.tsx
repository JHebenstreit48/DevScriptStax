import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IAMAndRoles = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/Security/IAMAndRoles';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="IAM & Roles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IAMAndRoles;
