import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
