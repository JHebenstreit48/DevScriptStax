import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Plugins = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Advanced/Extending/Plugins';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Plugins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Plugins;
