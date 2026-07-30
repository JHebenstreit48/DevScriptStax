import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ReactIcons = () => {
  const markdownFilePath = 'FrontEnd/React/ToolsAndTesting/Tools/IconsAndAssets/ReactIcons';

  return (
    <>
      <PageLayout>
        <PageTitle title="React Icons" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReactIcons;
