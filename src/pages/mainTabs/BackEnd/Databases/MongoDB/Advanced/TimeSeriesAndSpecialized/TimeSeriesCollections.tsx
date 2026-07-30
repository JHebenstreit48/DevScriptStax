import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TimeSeriesCollections = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/TimeSeriesAndSpecialized/TimeSeriesCollections';

  return (
    <>
      <PageLayout>
        <PageTitle title="Time-Series Collections" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TimeSeriesCollections;
