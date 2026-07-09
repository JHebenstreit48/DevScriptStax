import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SchemaValidation = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/DataLifecycleAndGovernance/SchemaValidation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Schema Validation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SchemaValidation;
