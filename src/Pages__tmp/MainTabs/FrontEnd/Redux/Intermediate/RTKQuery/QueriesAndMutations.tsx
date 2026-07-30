import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const QueriesAndMutations = () => {
  const markdownFilePath = 'FrontEnd/Redux/Intermediate/RTKQuery/QueriesAndMutations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Queries & Mutations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default QueriesAndMutations;
