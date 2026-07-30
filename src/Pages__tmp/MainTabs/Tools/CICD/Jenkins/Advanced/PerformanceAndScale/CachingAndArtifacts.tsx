import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CachingAndArtifacts = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Advanced/PerformanceAndScale/CachingAndArtifacts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Caching & Artifacts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CachingAndArtifacts;
