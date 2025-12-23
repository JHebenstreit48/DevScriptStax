import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CrossTabSync = () => {
  const markdownFilePath = 'FrontEnd/Redux/Advanced/PersistenceAndSync/CrossTabSync';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cross-Tab Sync" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CrossTabSync;
