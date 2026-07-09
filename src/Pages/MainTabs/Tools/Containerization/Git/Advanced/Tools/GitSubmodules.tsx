import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GitSubmodules = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/Tools/GitSubmodules';

  return (
    <>
      <PageLayout>
        <PageTitle title="Git Submodules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GitSubmodules;
