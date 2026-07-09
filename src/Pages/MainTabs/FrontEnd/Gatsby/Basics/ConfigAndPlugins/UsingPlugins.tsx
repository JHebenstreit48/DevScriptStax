import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UsingPlugins = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Basics/ConfigAndPlugins/UsingPlugins';

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
