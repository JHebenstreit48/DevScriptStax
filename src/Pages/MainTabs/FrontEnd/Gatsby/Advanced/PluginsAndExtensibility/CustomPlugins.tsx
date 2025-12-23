import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomPlugins = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/PluginsAndExtensibility/CustomPlugins';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Custom Plugins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomPlugins;
