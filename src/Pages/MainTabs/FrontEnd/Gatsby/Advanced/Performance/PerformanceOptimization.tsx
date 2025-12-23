import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PerformanceOptimization = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/Performance/PerformanceOptimization';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Performance Optimization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PerformanceOptimization;
