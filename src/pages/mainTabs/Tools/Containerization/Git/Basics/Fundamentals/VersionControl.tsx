import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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