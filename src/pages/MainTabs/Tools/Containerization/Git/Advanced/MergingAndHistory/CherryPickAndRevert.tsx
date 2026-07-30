import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CherryPickAndRevert = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/MergingAndHistory/CherryPickAndRevert';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cherry-Pick and Revert" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CherryPickAndRevert;
