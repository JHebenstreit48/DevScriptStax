import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WebpackConfigJs = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Basics/Setup/WebpackConfigJs';

  return (
    <>
      <PageLayout>
        <PageTitle title="webpack.config.js" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebpackConfigJs;
