import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PresetEnvAndNesting = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/CorePlugins/PresetEnvAndNesting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="preset-env & Nesting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PresetEnvAndNesting;
