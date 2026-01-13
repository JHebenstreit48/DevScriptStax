import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BenefitsOfAPIGateways = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/Gateways/BenefitsOfAPIGateways';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Benefits of API Gateways" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BenefitsOfAPIGateways;
