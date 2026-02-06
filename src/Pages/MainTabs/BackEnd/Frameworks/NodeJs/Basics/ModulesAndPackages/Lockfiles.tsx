import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Lockfiles = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Node/Basics/ModulesAndPackages/LockfilesNpm';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Lockfiles (npm)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Lockfiles;
