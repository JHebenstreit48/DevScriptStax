import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MergingAndConflictResolution = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/MergingAndHistory/MergingAndConflictResolution';

  return (
    <>
      <PageLayout>
        <PageTitle title="Merging & Conflict Resolution" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MergingAndConflictResolution;
