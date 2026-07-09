import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PrettierPlugins = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Advanced/PluginsAndExt/PrettierPlugins';

  return (
    <>
      <PageLayout>
        <PageTitle title="Prettier Plugins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PrettierPlugins;
