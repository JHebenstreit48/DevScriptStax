import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
