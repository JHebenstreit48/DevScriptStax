import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Introduction = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/Fundamentals/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cypress Basics - Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;