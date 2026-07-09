import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LargeRepos = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Advanced/Performance/LargeRepos';

  return (
    <>
      <PageLayout>
        <PageTitle title="Large Repos" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LargeRepos;
