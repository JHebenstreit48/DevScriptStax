import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
