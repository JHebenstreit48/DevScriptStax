import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AgentsNodesAndLabels = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Advanced/AgentsAndDistributed/AgentsNodesAndLabels';

  return (
    <>
      <PageLayout>
        <PageTitle title="Agents, Nodes & Labels" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AgentsNodesAndLabels;
