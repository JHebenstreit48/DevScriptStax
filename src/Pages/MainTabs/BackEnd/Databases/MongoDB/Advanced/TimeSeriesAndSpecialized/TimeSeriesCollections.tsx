import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TimeSeriesCollections = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/TimeSeriesAndSpecialized/TimeSeriesCollections';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Time-Series Collections" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TimeSeriesCollections;
