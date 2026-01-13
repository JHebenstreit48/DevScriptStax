import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AgentsNodesAndLabels = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Advanced/AgentsAndDistributed/AgentsNodesAndLabels';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Agents, Nodes & Labels" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AgentsNodesAndLabels;
