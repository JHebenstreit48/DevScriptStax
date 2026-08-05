import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
