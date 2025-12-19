import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HTTPMocking = () => {
  const markdownFilePath = 'Languages/Dart/Testing/Integration/HTTPMocking';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="HTTP Mocking" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HTTPMocking;
