import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RequestResponse = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/Web/RequestResponse';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Request/Response" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RequestResponse;
