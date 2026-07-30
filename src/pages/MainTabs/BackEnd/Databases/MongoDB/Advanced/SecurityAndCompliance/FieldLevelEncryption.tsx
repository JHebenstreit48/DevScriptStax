import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
