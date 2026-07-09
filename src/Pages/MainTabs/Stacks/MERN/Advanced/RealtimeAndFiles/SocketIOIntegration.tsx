import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
