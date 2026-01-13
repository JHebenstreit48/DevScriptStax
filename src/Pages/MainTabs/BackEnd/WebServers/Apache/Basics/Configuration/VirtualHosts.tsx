import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VirtualHosts = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Basics/Configuration/VirtualHosts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Virtual Hosts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VirtualHosts;
