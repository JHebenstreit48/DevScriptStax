import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SocketIOIntegration = () => {
  const markdownFilePath = 'Stacks/MERN/Advanced/RealtimeAndFiles/SocketIOIntegration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Socket.IO Integration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SocketIOIntegration;
