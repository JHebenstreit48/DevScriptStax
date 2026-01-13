import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HTTPClient = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Basics/Networking/HTTPClient';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="HTTP Client" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HTTPClient;
