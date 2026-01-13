import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SourceMaps = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Advanced/DevAndDX/SourceMaps';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Source Maps" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SourceMaps;
