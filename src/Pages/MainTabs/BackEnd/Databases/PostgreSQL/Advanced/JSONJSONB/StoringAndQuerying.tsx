import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StoringAndQuerying = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/JSONJSONB/StoringAndQuerying';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Storing & Querying" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StoringAndQuerying;
