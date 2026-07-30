import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FullTextSearch = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/AdvancedSQL/FullTextSearch';

  return (
    <>
      <PageLayout>
        <PageTitle title="Full-Text Search" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FullTextSearch;
