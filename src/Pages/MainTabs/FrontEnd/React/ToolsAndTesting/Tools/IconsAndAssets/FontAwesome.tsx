import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
