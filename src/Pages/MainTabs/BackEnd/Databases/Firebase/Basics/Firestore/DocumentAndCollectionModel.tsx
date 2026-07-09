import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DocumentAndCollectionModel = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Firestore/DocumentAndCollectionModel';

  return (
    <>
      <PageLayout>
        <PageTitle title="Document & Collection Model" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DocumentAndCollectionModel;
