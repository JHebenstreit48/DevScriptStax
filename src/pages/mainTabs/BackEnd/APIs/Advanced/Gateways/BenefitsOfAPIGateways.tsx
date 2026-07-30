import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BenefitsOfAPIGateways = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/Gateways/BenefitsOfAPIGateways';

  return (
    <>
      <PageLayout>
        <PageTitle title="Benefits of API Gateways" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BenefitsOfAPIGateways;
