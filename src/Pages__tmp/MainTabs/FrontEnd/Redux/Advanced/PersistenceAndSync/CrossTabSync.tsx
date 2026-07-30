import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CrossTabSync = () => {
  const markdownFilePath = 'FrontEnd/Redux/Advanced/PersistenceAndSync/CrossTabSync';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cross-Tab Sync" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CrossTabSync;
