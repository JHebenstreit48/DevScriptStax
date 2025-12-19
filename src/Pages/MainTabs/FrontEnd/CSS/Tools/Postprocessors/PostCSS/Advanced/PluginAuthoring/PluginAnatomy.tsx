import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PluginAnatomy = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/PluginAuthoring/PluginAnatomy';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Plugin Anatomy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PluginAnatomy;
