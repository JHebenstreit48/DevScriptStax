import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FontAwesome = () => {
  const markdownFilePath = 'FrontEnd/React/ToolsAndTesting/Tools/IconsAndAssets/FontAwesome';

  return (
    <>
      <PageLayout>
        <PageTitle title="Font Awesome" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FontAwesome;
