import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HierarchicalRoles = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authorization/Basics/PoliciesAndAccess/HierarchicalRoles';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Hierarchical Roles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HierarchicalRoles;
