import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
