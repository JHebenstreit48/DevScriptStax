import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IndexTypes = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Intermediate/IndexesAndPerformance/IndexTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Index Types (B-tree, Hash, GIN, GIST)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IndexTypes;
