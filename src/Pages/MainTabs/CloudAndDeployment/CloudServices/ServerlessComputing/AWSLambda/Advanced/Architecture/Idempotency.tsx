import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Idempotency = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/Architecture/Idempotency';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Idempotency" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Idempotency;
