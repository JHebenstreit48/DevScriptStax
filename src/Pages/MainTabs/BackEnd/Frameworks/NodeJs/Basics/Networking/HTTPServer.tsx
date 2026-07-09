import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
