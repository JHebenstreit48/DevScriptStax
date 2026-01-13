import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PrettierPlugins = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Advanced/PluginsAndExt/PrettierPlugins';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Prettier Plugins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PrettierPlugins;
