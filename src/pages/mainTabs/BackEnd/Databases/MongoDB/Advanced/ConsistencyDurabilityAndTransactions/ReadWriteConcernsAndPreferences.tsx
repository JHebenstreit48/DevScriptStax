import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ReadWriteConcernsAndPreferences = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/ConsistencyDurabilityAndTransactions/ReadWriteConcernsAndPreferences';

  return (
    <>
      <PageLayout>
        <PageTitle title="Read/Write Concerns & Preferences" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReadWriteConcernsAndPreferences;
