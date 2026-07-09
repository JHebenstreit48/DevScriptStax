import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RolesAndPermissions = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Tools/CLIAndAdmin/RolesAndPermissions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Roles & Permissions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RolesAndPermissions;
