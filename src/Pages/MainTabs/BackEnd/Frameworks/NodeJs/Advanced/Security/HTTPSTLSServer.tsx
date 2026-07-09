import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
