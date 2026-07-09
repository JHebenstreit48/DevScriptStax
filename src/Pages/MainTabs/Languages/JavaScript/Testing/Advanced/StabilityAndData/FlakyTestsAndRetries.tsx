import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
