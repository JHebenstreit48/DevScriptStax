import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TTLAndArchival = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/DataLifecycleAndGovernance/TTLAndArchival';

  return (
    <>
      <PageLayout>
        <PageTitle title="TTL & Archival" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TTLAndArchival;
