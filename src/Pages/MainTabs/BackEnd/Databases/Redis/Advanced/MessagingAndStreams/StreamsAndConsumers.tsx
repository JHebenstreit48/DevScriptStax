import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StreamsAndConsumers = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/MessagingAndStreams/StreamsAndConsumers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Streams & Consumers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StreamsAndConsumers;
