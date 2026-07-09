import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Operators = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Intermediate/Aggregation/Operators';

  return (
    <>
      <PageLayout>
        <PageTitle title="Operators" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Operators;
