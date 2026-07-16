import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PoliciesAndRoles = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/Provisioning/AWSSAM/Basics/Authoring/PoliciesAndRoles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Policies & Roles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PoliciesAndRoles;
