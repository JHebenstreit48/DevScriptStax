import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LargeRepos = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Advanced/Performance/LargeRepos';

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
