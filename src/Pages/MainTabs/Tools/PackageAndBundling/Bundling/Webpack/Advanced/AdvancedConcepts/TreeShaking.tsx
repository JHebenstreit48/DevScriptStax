import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TreeShaking = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Advanced/AdvancedConcepts/TreeShaking';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Tree Shaking" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TreeShaking;
