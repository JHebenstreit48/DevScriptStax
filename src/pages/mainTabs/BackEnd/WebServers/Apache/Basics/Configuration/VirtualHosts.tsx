import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
