import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CachingAndIncrementalBuilds = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/Performance/CachingAndIncrementalBuilds';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Caching & Incremental Builds" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CachingAndIncrementalBuilds;
