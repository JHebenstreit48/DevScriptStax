import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TriggersAndOutboxPattern = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/ChangeStreamsAndEvents/TriggersAndOutboxPattern';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Triggers & Outbox Pattern" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TriggersAndOutboxPattern;
