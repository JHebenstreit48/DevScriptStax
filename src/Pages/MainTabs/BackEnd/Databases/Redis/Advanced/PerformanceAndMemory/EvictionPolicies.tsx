import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EvictionPolicies = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/PerformanceAndMemory/EvictionPolicies';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Eviction Policies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EvictionPolicies;
