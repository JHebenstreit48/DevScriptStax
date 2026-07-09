import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PackageManagersAndUpdates = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Basics/SetupAndOps/PackageManagersAndUpdates';

  return (
    <>
      <PageLayout>
        <PageTitle title="Package Managers & Updates" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PackageManagersAndUpdates;
