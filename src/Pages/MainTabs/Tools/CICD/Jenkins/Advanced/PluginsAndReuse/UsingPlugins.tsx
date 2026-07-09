import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UsingPlugins = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Advanced/PluginsAndReuse/UsingPlugins';

  return (
    <>
      <PageLayout>
        <PageTitle title="Using Plugins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UsingPlugins;
