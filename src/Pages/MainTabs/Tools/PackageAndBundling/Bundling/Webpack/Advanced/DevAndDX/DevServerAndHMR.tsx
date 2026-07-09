import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DevServerAndHMR = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Advanced/DevAndDX/DevServerAndHMR';

  return (
    <>
      <PageLayout>
        <PageTitle title="Dev Server & HMR" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DevServerAndHMR;
