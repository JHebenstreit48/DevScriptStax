import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
