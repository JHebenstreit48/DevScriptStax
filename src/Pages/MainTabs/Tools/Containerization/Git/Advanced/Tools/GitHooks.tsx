import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GitHooks = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/Tools/GitHooks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Git Hooks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GitHooks;
