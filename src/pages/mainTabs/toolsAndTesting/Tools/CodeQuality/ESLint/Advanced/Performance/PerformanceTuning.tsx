import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
