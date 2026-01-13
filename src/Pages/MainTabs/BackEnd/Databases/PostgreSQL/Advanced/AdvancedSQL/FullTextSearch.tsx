import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FullTextSearch = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/AdvancedSQL/FullTextSearch';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Full-Text Search" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FullTextSearch;
