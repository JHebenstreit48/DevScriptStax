import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
