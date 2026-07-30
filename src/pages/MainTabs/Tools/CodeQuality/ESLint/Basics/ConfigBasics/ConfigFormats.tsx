import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ConfigFormats = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Basics/ConfigBasics/ConfigFormats';

  return (
    <>
      <PageLayout>
        <PageTitle title="Config Formats" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConfigFormats;
