import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FuturesAndAwait = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/AsyncAndStreams/FuturesAndAwait';

  return (
    <>
      <PageLayout>
        <PageTitle title="Futures & await" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FuturesAndAwait;
