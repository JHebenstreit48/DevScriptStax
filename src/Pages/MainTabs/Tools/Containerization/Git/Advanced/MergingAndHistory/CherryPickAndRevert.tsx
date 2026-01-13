import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CherryPickAndRevert = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/MergingAndHistory/CherryPickAndRevert';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cherry-Pick and Revert" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CherryPickAndRevert;
