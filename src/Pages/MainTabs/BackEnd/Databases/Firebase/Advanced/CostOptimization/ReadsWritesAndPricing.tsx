import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReadsWritesAndPricing = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Advanced/CostOptimization/ReadsWritesAndPricing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Reads/Writes & Pricing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReadsWritesAndPricing;
