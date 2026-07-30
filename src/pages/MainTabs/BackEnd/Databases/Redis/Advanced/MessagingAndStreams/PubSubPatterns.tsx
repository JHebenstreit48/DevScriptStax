import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PubSubPatterns = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/MessagingAndStreams/PubSubPatterns';

  return (
    <>
      <PageLayout>
        <PageTitle title="Pub/Sub Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PubSubPatterns;
