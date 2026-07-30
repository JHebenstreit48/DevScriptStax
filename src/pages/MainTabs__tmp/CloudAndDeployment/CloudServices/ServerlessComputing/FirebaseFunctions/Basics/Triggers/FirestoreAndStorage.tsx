import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FirestoreAndStorage = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/FirebaseFunctions/Basics/Triggers/FirestoreAndStorage';

  return (
    <>
      <PageLayout>
        <PageTitle title="Firestore & Storage" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FirestoreAndStorage;
