import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UsingPlugins = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Basics/PluginsAndEditors/UsingPlugins';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Using Plugins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UsingPlugins;
