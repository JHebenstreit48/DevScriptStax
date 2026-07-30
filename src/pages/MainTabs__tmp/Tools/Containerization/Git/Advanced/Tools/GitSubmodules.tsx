import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
