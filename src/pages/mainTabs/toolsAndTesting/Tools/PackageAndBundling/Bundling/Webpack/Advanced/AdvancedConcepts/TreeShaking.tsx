import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TreeShaking = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Advanced/AdvancedConcepts/TreeShaking';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tree Shaking" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TreeShaking;
