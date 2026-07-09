import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HTTPServer = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Basics/Networking/HTTPServer';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTTP Server" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HTTPServer;
