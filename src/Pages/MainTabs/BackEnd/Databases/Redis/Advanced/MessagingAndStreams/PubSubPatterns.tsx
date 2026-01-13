import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PubSubPatterns = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/MessagingAndStreams/PubSubPatterns';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Pub/Sub Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PubSubPatterns;
