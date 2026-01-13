import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReadWriteConcernsAndPreferences = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/ConsistencyDurabilityAndTransactions/ReadWriteConcernsAndPreferences';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Read/Write Concerns & Preferences" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReadWriteConcernsAndPreferences;
