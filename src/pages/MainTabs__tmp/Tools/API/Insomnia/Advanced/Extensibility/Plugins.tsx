import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Plugins = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Advanced/Extensibility/Plugins';

  return (
    <>
      <PageLayout>
        <PageTitle title="Plugins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Plugins;
