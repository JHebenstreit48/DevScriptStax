import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VersionControl = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Basics/Fundamentals/VersionControl';

  return (
    <>
      <PageLayout>
        <PageTitle title="Git Fundamentals - Version Control" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VersionControl;