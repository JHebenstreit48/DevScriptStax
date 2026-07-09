import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AsyncAwait = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/AsyncAndConcurrency/AsyncAwait';

  return (
    <>
      <PageLayout>
        <PageTitle title="Async/Await" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AsyncAwait;
