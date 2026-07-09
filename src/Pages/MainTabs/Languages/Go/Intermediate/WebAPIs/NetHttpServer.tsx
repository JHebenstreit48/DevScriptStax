import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NetHttpServer = () => {
  const markdownFilePath = 'Languages/Go/Intermediate/WebAPIs/NetHttpServer';

  return (
    <>
      <PageLayout>
        <PageTitle title="net/http Server" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetHttpServer;
