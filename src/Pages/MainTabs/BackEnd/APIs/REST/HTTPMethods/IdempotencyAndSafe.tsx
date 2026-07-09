import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IdempotencyAndSafe = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/HTTPMethods/IdempotencyAndSafe';

  return (
    <>
      <PageLayout>
        <PageTitle title="Idempotency & Safe" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IdempotencyAndSafe;
