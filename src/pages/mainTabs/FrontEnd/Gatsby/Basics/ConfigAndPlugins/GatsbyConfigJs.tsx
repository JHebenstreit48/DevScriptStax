import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GatsbyConfigJs = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Basics/ConfigAndPlugins/GatsbyConfigJs';

  return (
    <>
      <PageLayout>
        <PageTitle title="gatsby-config.js" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GatsbyConfigJs;
