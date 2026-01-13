import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SchemaValidation = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/DataLifecycleAndGovernance/SchemaValidation';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Schema Validation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SchemaValidation;
