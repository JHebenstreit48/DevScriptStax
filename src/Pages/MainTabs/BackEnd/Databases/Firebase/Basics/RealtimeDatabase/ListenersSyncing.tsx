import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ListenersSyncing = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/RealtimeDatabase/ListenersSyncing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Listeners/Syncing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ListenersSyncing;
