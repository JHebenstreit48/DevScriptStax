import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExplainDeepDive = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/IndexingAndQueryPlanner/ExplainDeepDive';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Explain() Deep Dive" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExplainDeepDive;
