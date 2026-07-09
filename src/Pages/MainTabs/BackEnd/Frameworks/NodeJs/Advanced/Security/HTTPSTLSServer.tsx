import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HTTPSTLSServer = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Advanced/Security/HTTPSTLSServer';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTTPS/TLS Server" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HTTPSTLSServer;
