import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ExplainDeepDive = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/IndexingAndQueryPlanner/ExplainDeepDive';

  return (
    <>
      <PageLayout>
        <PageTitle title="Explain() Deep Dive" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExplainDeepDive;
