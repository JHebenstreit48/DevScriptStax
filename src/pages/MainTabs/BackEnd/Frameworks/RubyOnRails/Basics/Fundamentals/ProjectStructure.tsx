import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProjectStructure = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Basics/Fundamentals/ProjectStructure';

  return (
    <>
      <PageLayout>
        <PageTitle title="Project Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProjectStructure;
