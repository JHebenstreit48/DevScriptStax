import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RebaseVsMerge = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/MergingAndHistory/RebaseVsMerge';

  return (
    <>
      <PageLayout>
        <PageTitle title="Rebase vs Merge" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RebaseVsMerge;
