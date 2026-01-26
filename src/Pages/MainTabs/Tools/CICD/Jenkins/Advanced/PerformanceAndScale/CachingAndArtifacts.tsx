import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CachingAndArtifacts = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Advanced/PerformanceAndScale/CachingAndArtifacts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Caching & Artifacts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CachingAndArtifacts;
