import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
