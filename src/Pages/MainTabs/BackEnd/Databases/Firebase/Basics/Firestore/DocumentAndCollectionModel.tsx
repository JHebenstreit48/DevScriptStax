import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DocumentAndCollectionModel = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Firestore/DocumentAndCollectionModel';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Document & Collection Model" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DocumentAndCollectionModel;
