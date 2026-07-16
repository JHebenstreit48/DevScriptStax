import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ConcurrencyAndTimeouts = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/Performance/ConcurrencyAndTimeouts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Concurrency & Timeouts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConcurrencyAndTimeouts;
