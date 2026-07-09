import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
