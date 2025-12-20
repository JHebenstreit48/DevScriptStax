import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReactIcons = () => {
  const markdownFilePath = 'FrontEnd/React/ToolsAndTesting/Tools/IconsAndAssets/ReactIcons';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Icons" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReactIcons;
