import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
