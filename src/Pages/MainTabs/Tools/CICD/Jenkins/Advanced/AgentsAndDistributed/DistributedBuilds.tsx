import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DistributedBuilds = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Advanced/AgentsAndDistributed/DistributedBuilds';

  return (
    <>
      <PageLayout>
        <PageTitle title="Distributed Builds" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DistributedBuilds;
