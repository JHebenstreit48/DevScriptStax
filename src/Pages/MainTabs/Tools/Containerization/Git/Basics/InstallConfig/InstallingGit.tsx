import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InstallingGit = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Basics/InstallConfig/InstallingGit';

  return (
    <>
      <PageLayout>
        <PageTitle title="Installing Git" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallingGit;
