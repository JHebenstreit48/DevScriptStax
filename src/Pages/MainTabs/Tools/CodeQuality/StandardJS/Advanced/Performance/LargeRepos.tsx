import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LargeRepos = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Advanced/Performance/LargeRepos';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Large Repos" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LargeRepos;
