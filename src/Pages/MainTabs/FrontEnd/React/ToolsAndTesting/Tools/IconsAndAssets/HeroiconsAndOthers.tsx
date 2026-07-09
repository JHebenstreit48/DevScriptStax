import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HeroiconsAndOthers = () => {
  const markdownFilePath = 'FrontEnd/React/ToolsAndTesting/Tools/IconsAndAssets/HeroiconsAndOthers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Heroicons & Others" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HeroiconsAndOthers;
