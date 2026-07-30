import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PluginAnatomy = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/PluginAuthoring/PluginAnatomy';

  return (
    <>
      <PageLayout>
        <PageTitle title="Plugin Anatomy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PluginAnatomy;
