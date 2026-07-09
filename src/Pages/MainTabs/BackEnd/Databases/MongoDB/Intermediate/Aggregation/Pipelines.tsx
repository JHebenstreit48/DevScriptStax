import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Pipelines = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Intermediate/Aggregation/Pipelines';

  return (
    <>
      <PageLayout>
        <PageTitle title="Pipelines" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Pipelines;
