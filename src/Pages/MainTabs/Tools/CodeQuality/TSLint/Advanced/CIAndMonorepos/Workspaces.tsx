import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Workspaces = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Advanced/CIAndMonorepos/Workspaces';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Workspaces" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Workspaces;
