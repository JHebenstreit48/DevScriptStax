import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProjectStructure = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJS/Basics/Fundamentals/ProjectStructure';

  return (
    <>
      <PageLayout>
        <PageTitle title="Express.js Fundamentals - Project Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProjectStructure;