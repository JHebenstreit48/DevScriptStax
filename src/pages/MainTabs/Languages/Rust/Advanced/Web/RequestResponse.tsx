import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RequestResponse = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/Web/RequestResponse';

  return (
    <>
      <PageLayout>
        <PageTitle title="Request/Response" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RequestResponse;
