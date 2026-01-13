import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SocketIOIntegration = () => {
  const markdownFilePath = 'Stacks/MERN/Advanced/RealtimeAndFiles/SocketIOIntegration';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Socket.IO Integration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SocketIOIntegration;
