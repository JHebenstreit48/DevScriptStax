import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MonoreposAndWorkspaces = () => {
  const markdownFilePath = 'Stacks/MERN/Advanced/Architecture/MonoreposAndWorkspaces';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Monorepos & Workspaces" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MonoreposAndWorkspaces;
