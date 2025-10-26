import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BundleOptimization = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/Performance/BundleOptimization';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Bundle Optimization in Angular" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BundleOptimization;