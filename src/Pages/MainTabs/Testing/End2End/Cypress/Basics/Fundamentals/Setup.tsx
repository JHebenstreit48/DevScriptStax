import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Setup = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/Fundamentals/Setup';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cypress Basics - Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Setup;