import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IndexingJSONFields = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/JSONJSONB/IndexingJSONFields';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Indexing JSON Fields" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IndexingJSONFields;
