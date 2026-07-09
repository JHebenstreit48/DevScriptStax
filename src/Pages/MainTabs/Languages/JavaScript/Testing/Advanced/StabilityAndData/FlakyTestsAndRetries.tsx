import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FlakyTestsAndRetries = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Advanced/StabilityAndData/FlakyTestsAndRetries';

  return (
    <>
      <PageLayout>
        <PageTitle title="Flaky Tests & Retries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FlakyTestsAndRetries;
