import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GitHooks = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/Tools/GitHooks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Git Hooks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GitHooks;
