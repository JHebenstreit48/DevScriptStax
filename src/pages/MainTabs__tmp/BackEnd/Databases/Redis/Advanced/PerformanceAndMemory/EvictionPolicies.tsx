import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EvictionPolicies = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/PerformanceAndMemory/EvictionPolicies';

  return (
    <>
      <PageLayout>
        <PageTitle title="Eviction Policies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EvictionPolicies;
