import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VirtualHosts = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Basics/Configuration/VirtualHosts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Virtual Hosts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VirtualHosts;
