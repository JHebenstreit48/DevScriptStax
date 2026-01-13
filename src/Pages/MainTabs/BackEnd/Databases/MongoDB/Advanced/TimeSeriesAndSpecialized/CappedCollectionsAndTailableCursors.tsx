import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CappedCollectionsAndTailableCursors = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/TimeSeriesAndSpecialized/CappedCollectionsAndTailableCursors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Capped Collections & Tailable Cursors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CappedCollectionsAndTailableCursors;
