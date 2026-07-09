import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
