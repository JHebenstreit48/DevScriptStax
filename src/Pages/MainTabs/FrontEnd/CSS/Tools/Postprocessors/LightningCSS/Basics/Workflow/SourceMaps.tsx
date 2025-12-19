import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SourceMaps = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics/Workflow/SourceMaps';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Source Maps (Basics)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SourceMaps;
