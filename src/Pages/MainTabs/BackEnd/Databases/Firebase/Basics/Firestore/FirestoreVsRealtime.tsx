import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
