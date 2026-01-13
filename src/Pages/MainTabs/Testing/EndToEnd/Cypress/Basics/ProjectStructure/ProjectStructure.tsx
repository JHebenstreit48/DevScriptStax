import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProjectStructure = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/ProjectStructure/ProjectStructure';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Project Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProjectStructure;
