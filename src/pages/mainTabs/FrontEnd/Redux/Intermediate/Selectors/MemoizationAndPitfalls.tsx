import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MemoizationAndPitfalls = () => {
  const markdownFilePath = 'FrontEnd/Redux/Intermediate/Selectors/MemoizationAndPitfalls';

  return (
    <>
      <PageLayout>
        <PageTitle title="Memoization & Pitfalls" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MemoizationAndPitfalls;
