import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VersionControl = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Basics/Fundamentals/VersionControl';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Git Fundamentals - Version Control" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VersionControl;