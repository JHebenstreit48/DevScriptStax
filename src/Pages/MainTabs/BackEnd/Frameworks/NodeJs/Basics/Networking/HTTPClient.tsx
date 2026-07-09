import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HTTPClient = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Basics/Networking/HTTPClient';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTTP Client" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HTTPClient;
