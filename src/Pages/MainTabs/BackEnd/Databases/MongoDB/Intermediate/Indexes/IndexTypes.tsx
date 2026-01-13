import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IndexTypes = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Intermediate/Indexes/IndexTypes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Index Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IndexTypes;
