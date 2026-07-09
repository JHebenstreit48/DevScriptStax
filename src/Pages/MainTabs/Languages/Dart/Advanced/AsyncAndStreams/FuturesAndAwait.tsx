import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
