import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProjectSetup = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Fundamentals/ProjectSetup';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Project Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProjectSetup;
