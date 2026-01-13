import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TTLAndArchival = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/DataLifecycleAndGovernance/TTLAndArchival';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="TTL & Archival" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TTLAndArchival;
