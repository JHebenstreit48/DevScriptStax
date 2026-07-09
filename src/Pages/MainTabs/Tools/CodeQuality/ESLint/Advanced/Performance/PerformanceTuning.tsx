import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PerformanceTuning = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Advanced/Performance/PerformanceTuning';

  return (
    <>
      <PageLayout>
        <PageTitle title="Performance Tuning" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PerformanceTuning;
