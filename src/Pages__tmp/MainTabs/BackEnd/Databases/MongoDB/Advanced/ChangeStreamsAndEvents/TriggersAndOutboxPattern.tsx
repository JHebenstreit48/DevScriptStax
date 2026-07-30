import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TriggersAndOutboxPattern = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/ChangeStreamsAndEvents/TriggersAndOutboxPattern';

  return (
    <>
      <PageLayout>
        <PageTitle title="Triggers & Outbox Pattern" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TriggersAndOutboxPattern;
