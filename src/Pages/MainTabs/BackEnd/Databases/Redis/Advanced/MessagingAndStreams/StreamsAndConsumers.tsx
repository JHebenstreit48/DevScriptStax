import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StreamsAndConsumers = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/MessagingAndStreams/StreamsAndConsumers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Streams & Consumers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StreamsAndConsumers;
