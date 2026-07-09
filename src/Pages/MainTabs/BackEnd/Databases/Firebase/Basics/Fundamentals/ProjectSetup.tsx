import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProjectSetup = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Fundamentals/ProjectSetup';

  return (
    <>
      <PageLayout>
        <PageTitle title="Project Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProjectSetup;
