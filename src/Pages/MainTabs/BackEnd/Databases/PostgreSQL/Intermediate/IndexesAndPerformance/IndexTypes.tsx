import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IndexTypes = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Intermediate/IndexesAndPerformance/IndexTypes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Index Types (B-tree, Hash, GIN, GIST)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IndexTypes;
