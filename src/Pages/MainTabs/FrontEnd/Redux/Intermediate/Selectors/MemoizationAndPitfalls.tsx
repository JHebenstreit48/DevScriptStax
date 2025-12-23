import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MemoizationAndPitfalls = () => {
  const markdownFilePath = 'FrontEnd/Redux/Intermediate/Selectors/MemoizationAndPitfalls';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Memoization & Pitfalls" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MemoizationAndPitfalls;
