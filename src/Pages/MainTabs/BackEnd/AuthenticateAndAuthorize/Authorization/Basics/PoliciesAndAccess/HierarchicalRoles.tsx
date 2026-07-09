import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HierarchicalRoles = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authorization/Basics/PoliciesAndAccess/HierarchicalRoles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Hierarchical Roles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HierarchicalRoles;
