import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HTTPStatusCodes = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/ErrorHandling/HTTPStatusCodes';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTTP Status Codes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HTTPStatusCodes;
