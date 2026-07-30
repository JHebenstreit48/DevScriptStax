import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
