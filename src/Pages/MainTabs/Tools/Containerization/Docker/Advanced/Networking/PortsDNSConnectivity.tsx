import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PortsDNSConnectivity = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Advanced/Networking/PortsDNSConnectivity';

  return (
    <>
      <PageLayout>
        <PageTitle title="Ports, DNS, Connectivity" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PortsDNSConnectivity;
