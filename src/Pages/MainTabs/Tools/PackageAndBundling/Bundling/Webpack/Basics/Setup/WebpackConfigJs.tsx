import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WebpackConfigJs = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Basics/Setup/WebpackConfigJs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="webpack.config.js" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebpackConfigJs;
