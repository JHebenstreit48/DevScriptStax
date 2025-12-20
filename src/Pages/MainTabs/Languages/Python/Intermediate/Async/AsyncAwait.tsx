import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AsyncAwait = () => {
  const markdownFilePath = 'Languages/Python/Intermediate/Async/AsyncAwait';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Async/Await" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AsyncAwait;
