import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Loaders = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Basics/CoreBuild/Loaders';

  return (
    <>
      <PageLayout>
        <PageTitle title="Loaders" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Loaders;
