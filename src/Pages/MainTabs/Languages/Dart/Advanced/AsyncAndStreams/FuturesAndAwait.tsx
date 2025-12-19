import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FuturesAndAwait = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/AsyncAndStreams/FuturesAndAwait';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Futures & await" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FuturesAndAwait;
