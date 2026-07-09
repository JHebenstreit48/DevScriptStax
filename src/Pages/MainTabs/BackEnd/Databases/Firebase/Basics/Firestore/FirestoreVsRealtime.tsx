import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FirestoreVsRealtime = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Firestore/FirestoreVsRealtime';

  return (
    <>
      <PageLayout>
        <PageTitle title="Firestore vs Realtime" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FirestoreVsRealtime;
