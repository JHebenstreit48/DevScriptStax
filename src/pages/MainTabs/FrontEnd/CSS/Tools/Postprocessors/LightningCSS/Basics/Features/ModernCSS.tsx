import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ModernCSS = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics/Features/ModernCSS';

  return (
    <>
      <PageLayout>
        <PageTitle title="Modern CSS (Nesting / Custom Media)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModernCSS;
