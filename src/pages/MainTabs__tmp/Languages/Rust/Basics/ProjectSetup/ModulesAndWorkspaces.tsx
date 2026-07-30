import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
