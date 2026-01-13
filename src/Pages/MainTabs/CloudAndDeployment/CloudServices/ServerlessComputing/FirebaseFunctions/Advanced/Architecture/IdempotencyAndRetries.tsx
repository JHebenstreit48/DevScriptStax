import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IdempotencyAndRetries = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/Architecture/IdempotencyAndRetries';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Idempotency & Retries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IdempotencyAndRetries;
