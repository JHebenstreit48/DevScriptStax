import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Structure = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/ProjectStructure/Structure';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cypress Basics - Project Structure - Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Structure;