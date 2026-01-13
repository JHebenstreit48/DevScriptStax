import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConcurrencyAndTimeouts = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/Performance/ConcurrencyAndTimeouts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Concurrency & Timeouts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConcurrencyAndTimeouts;
