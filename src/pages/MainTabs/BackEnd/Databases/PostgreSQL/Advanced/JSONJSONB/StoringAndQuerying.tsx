import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StoringAndQuerying = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/JSONJSONB/StoringAndQuerying';

  return (
    <>
      <PageLayout>
        <PageTitle title="Storing & Querying" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StoringAndQuerying;
