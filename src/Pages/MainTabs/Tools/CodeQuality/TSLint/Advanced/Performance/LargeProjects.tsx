import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LargeProjects = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Advanced/Performance/LargeProjects';

  return (
    <>
      <PageLayout>
        <PageTitle title="Large Projects" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LargeProjects;
