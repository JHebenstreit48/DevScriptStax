import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StaticSiteGeneration = () => {
  const markdownFilePath = 'FrontEnd/React/Advanced/PerformanceAndRendering/StaticSiteGeneration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Static Site Generation (SSG)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StaticSiteGeneration;
