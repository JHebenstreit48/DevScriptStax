import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Performance = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Intermediate/Indexes/Performance';

  return (
    <>
      <PageLayout>
        <PageTitle title="Performance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Performance;
