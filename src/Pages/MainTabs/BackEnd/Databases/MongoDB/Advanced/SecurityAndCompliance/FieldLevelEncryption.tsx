import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FieldLevelEncryption = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/SecurityAndCompliance/FieldLevelEncryption';

  return (
    <>
      <PageLayout>
        <PageTitle title="Field Level Encryption (CSFLE)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FieldLevelEncryption;
