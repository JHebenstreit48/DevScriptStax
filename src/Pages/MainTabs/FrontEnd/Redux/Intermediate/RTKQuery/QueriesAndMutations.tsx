import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const QueriesAndMutations = () => {
  const markdownFilePath = 'FrontEnd/Redux/Intermediate/RTKQuery/QueriesAndMutations';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Queries & Mutations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default QueriesAndMutations;
