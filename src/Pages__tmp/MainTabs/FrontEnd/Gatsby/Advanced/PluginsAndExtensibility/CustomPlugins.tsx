import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CustomPlugins = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/PluginsAndExtensibility/CustomPlugins';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Plugins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomPlugins;
