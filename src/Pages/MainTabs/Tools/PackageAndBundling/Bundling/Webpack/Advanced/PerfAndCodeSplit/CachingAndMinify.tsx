import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CachingAndMinify = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Advanced/PerfAndCodeSplit/CachingAndMinify';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Caching & Minify" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CachingAndMinify;
