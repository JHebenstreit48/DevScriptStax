import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FieldLevelEncryption = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/SecurityAndCompliance/FieldLevelEncryption';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Field Level Encryption (CSFLE)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FieldLevelEncryption;
