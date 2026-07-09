import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OverviewAndTools = () => {
  const markdownFilePath = 'FrontEnd/React/ToolsAndTesting/Testing/OverviewAndTools';

  return (
    <>
      <PageLayout>
        <PageTitle title="Overview & Tools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OverviewAndTools;
