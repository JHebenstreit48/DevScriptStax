import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BundleOptimization = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/Performance/BundleOptimization';

  return (
    <>
      <PageLayout>
        <PageTitle title="Bundle Optimization in Angular" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BundleOptimization;