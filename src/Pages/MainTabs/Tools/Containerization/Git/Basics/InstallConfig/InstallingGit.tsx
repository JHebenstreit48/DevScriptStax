import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InstallingGit = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Basics/InstallConfig/InstallingGit';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Installing Git" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallingGit;
