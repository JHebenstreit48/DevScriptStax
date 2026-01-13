import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SDKOfflineAndCaching = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Advanced/OfflinePatterns/SDKOfflineAndCaching';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="SDK Offline & Caching" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SDKOfflineAndCaching;
