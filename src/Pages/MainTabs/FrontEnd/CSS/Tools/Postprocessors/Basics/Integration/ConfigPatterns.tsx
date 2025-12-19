import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConfigPatterns = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Basics/Integration/ConfigPatterns';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Config Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConfigPatterns;
