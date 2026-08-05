import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Workspaces = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Advanced/CIAndMonorepos/Workspaces';

  return (
    <>
      <PageLayout>
        <PageTitle title="Workspaces" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Workspaces;
