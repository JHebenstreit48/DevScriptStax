import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ServiceSetup = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics/Setup/ServiceSetup';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Service Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ServiceSetup;
