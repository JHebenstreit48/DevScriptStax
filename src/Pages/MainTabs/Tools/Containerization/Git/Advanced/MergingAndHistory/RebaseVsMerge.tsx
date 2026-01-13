import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RebaseVsMerge = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/MergingAndHistory/RebaseVsMerge';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Rebase vs Merge" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RebaseVsMerge;
