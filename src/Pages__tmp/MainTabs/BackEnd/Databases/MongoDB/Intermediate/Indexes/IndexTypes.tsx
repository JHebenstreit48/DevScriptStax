import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IndexTypes = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Intermediate/Indexes/IndexTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Index Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IndexTypes;
