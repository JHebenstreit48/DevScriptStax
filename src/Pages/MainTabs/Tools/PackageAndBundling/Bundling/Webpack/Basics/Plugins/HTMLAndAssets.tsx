import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HTMLAndAssets = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Basics/Plugins/HTMLAndAssets';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="HTML & Assets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HTMLAndAssets;
