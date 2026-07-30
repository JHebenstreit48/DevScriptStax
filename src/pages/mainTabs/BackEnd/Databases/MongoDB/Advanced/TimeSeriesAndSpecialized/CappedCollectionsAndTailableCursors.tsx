import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CappedCollectionsAndTailableCursors = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/TimeSeriesAndSpecialized/CappedCollectionsAndTailableCursors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Capped Collections & Tailable Cursors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CappedCollectionsAndTailableCursors;
