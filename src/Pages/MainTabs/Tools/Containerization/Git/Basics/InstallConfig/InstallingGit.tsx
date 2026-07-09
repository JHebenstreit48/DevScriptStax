import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
