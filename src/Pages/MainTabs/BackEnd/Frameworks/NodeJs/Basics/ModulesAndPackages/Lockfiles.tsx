import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Lockfiles = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Basics/ModulesAndPackages/LockfilesNpm';

  return (
    <>
      <PageLayout>
        <PageTitle title="Lockfiles (npm)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Lockfiles;
