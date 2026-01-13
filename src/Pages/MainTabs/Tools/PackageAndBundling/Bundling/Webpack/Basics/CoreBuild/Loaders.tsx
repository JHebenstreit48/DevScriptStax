import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Loaders = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Basics/CoreBuild/Loaders';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Loaders" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Loaders;
