import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NetHttpServer = () => {
  const markdownFilePath = 'Languages/Go/Intermediate/WebAPIs/NetHttpServer';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="net/http Server" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetHttpServer;
