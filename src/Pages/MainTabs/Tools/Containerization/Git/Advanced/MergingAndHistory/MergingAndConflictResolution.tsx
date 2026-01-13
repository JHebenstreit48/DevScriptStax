import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MergingAndConflictResolution = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/MergingAndHistory/MergingAndConflictResolution';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Merging & Conflict Resolution" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MergingAndConflictResolution;
