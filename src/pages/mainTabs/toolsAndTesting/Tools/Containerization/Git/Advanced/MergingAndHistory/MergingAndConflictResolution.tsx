import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
