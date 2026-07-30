import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EntryAndOutput = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Basics/CoreBuild/EntryAndOutput';

  return (
    <>
      <PageLayout>
        <PageTitle title="Entry & Output" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EntryAndOutput;
