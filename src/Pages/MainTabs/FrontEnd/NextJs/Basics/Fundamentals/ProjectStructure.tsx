import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProjectStructure = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Basics/Fundamentals/ProjectStructure';

  return (
    <>
      <PageLayout>
        <PageTitle title="Next.js Fundamentals - Project Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProjectStructure;