import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PresetEnvAndNesting = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/CorePlugins/PresetEnvAndNesting';

  return (
    <>
      <PageLayout>
        <PageTitle title="preset-env & Nesting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PresetEnvAndNesting;
