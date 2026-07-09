import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MonoreposAndWorkspaces = () => {
  const markdownFilePath = 'Stacks/MERN/Advanced/Architecture/MonoreposAndWorkspaces';

  return (
    <>
      <PageLayout>
        <PageTitle title="Monorepos & Workspaces" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MonoreposAndWorkspaces;
