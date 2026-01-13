import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DevServerAndHMR = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Advanced/DevAndDX/DevServerAndHMR';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Dev Server & HMR" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DevServerAndHMR;
