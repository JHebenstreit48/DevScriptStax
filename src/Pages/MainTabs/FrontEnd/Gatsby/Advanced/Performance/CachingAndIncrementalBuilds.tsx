import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CachingAndIncrementalBuilds = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/Performance/CachingAndIncrementalBuilds';

  return (
    <>
      <PageLayout>
        <PageTitle title="Caching & Incremental Builds" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CachingAndIncrementalBuilds;
