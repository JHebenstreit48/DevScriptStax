import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SchemasAndTables = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Basics/CoreSQL/SchemasTables';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Schemas & Tables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SchemasAndTables;