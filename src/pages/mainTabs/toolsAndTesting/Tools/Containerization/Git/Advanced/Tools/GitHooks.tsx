import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
