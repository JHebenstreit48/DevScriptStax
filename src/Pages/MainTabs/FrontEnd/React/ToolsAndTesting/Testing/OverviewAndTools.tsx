import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OverviewAndTools = () => {
  const markdownFilePath = 'FrontEnd/React/ToolsAndTesting/Testing/OverviewAndTools';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Overview & Tools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OverviewAndTools;
