import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ConfigPatterns = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Basics/Integration/ConfigPatterns';

  return (
    <>
      <PageLayout>
        <PageTitle title="Config Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConfigPatterns;
