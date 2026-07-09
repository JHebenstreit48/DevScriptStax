import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IndexTuning = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Advanced/DataModelingAndPerformance/IndexTuning';

  return (
    <>
      <PageLayout>
        <PageTitle title="Index Tuning (Firestore)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IndexTuning;
