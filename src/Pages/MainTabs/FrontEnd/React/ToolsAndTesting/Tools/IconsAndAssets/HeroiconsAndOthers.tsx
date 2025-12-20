import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HeroiconsAndOthers = () => {
  const markdownFilePath = 'FrontEnd/React/ToolsAndTesting/Tools/IconsAndAssets/HeroiconsAndOthers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Heroicons & Others" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HeroiconsAndOthers;
