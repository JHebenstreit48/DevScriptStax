import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Idempotency = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/Architecture/Idempotency';

  return (
    <>
      <PageLayout>
        <PageTitle title="Idempotency" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Idempotency;
