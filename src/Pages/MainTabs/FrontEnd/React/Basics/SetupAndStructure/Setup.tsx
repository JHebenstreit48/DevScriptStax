import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Setup = () => {
  const markdownFilePath =
    'FrontEnd/React/Basics/SetupAndStructure/Setup';

  return (
    <>
      <PageLayout>
        <PageTitle title="Project Setup in React" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Setup;