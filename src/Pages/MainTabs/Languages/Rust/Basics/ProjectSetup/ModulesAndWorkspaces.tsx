import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ModulesAndWorkspaces = () => {
  const markdownFilePath = 'Languages/Rust/Basics/ProjectSetup/ModulesAndWorkspaces';

  return (
    <>
      <PageLayout>
        <PageTitle title="Modules & Workspaces" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModulesAndWorkspaces;
